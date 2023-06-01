using System.Linq;
using System;
using System.Collections.Generic;
using ToSic.Razor.Blade;
using ToSic.Sxc.Data;

public class Helpers: Custom.Hybrid.Code12
{
  /// <summary>
  /// Create a hover-help-label for admins to better manage the questions
  /// </summary>
  public IHtmlTag AdminHelperLabel(ITypedItem q) {
    var itemCategories = q.Children("Categories").Select(cat => cat.String("Name"));
    var label = q.String("InternalTitle") + ", "
      + "Prio: " + q.Int("Priority") + ", "
      + "Categories: " + String.Join(",", itemCategories);
    return Edit.Attribute("title", label);
  }
}