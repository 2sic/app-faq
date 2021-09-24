using ToSic.Razor.Blade;
using System.Linq;
using System;
using System.Collections.Generic;

public class Helpers: Custom.Hybrid.Code12
{
  // Get all the questions and sort as is configured
  public IEnumerable<dynamic> GetQuestionsSorted() {
    var questions = AsList(App.Data["Question"] as object);
    var filterCats = AsList(Content.Categories as object);

    // if we have categories, then filter with these
    if(filterCats != null && filterCats.Any()) {
      questions = questions.Where(q => (q.Categories as IEnumerable<dynamic>).Any(qCat => filterCats.Any(fCat => fCat.Key == qCat.Key)));
    }

    // now sort by priority, big numbers first
    var sorted = questions.OrderByDescending(q => q.Priority);

    // now sort the results by the second parameter
    if (Content.SortOrder == "DESC-id-ASC") {
      return sorted.ThenBy(q => q.EntityId);
    } else if (Content.SortOrder == "DESC-id-DESC") {
      return sorted.ThenByDescending(q => q.EntityId);
    } else if (Content.SortOrder == "DESC-title-ASC") {
      return sorted.ThenBy(q => q.Title);
    }

    // if no additional sort order was used, return sorted by priority only
    return sorted;
  }

  // Create a help-label for admins to better manage the questions

  public object AdminHelperLabel(dynamic q) {
    var itemCategories = AsList(q.Categories as object).Select(cat => cat.Name);
    var label = q.InternalTitle + ", "
      + "Prio: " + q.Priority + ", "
      + "Categories: " + String.Join(",", itemCategories);
    return Edit.Attribute("title", label);
  }
}