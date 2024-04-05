using AppCode.Data;
using System.Linq;
using System;

namespace AppCode.Razor
{
  public abstract partial class AppRazor<TModel> : Custom.Hybrid.RazorTyped<TModel>
  {
    /// <summary>
    /// Create a hover-help-label for admins to better manage the questions
    /// </summary>

    // TODO:: Type Open
    public object AdminHelperLabel(Question question)
    {
      var itemCategories = question.Categories.Select(cat => cat.Name);
      var label = question.InternalTitle + ", "
        + "Prio: " + question.Priority + ", "
        + "Categories: " + String.Join(",", itemCategories);
      return Kit.Edit.Attribute("title", label);
    }

  }
}
