using ToSic.Razor.Blade;
using System.Linq;
using System;
using System.Collections.Generic;

public class Helpers: Custom.Hybrid.Code12
{
  /// <summary>
  /// Create a hover-help-label for admins to better manage the questions
  /// </summary>
  public object AdminHelperLabel(dynamic q) {
    var itemCategories = AsList(q.Categories as object).Select(cat => cat.Name);
    var label = q.InternalTitle + ", "
      + "Prio: " + q.Priority + ", "
      + "Categories: " + String.Join(",", itemCategories);
    return Edit.Attribute("title", label);
  }
}