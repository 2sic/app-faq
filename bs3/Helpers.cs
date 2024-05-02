using System.Linq;
using System;
using ToSic.Razor.Blade;
using ToSic.Sxc.Data;

public class Helpers: Custom.Hybrid.CodeTyped
{
  /// <summary>
  /// Create a hover-help-label for admins to better manage the questions
  /// </summary>
  public object AdminHelperLabel(ITypedItem q) {
    var itemCategories = q.Children("Categories").Select(cat => cat.String("Name"));
    var label = q.String("InternalTitle") + ", "
      + "Prio: " + q.Int("Priority") + ", "
      + "Categories: " + String.Join(",", itemCategories);
    return Kit.Edit.Attribute("title", label);
  }
}