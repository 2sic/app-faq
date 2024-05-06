using AppCode.Data;
using System.Linq;
using ToSic.Razor.Markup;

namespace AppCode.Razor
{
  public abstract partial class AppRazor<TModel> : Custom.Hybrid.RazorTyped<TModel>
  {
    /// <summary>
    /// Create a hover-help-label for admins to better manage the questions
    /// In this case, return can by a Object as it is only displayed and is not processed further but the Type are kept for better readability (IHtmlString)
    /// </summary>
    public IRawHtmlString AdminHelperLabel(Question question)
    {
      var itemCategories = question.Categories.Select(cat => cat.Name);
      var label = question.InternalTitle + ", "
        + "Prio: " + question.Priority + ", "
        + "Categories: " + string.Join(",", itemCategories);
      return Kit.Edit.Attribute("title", label);
    }

  }
}
