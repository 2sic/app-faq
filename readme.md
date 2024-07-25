<image src="app-icon.png" align="right" width="200px">

# Faq4 App for .net CMSs

> This is a [2sxc](https://2sxc.org) App for [DNN ☢️](https://www.dnnsoftware.com/) and [Oqtane 💧](https://www.oqtane.org/)

| Aspect              | Status | Comments or Version
| ------------------- | :----: | -------------------
| 2sxc                | ✅    | Requires 2sxc v17.07.00
| Dnn                 | ✅    | For v9.6.1+
| Oqtane              | ✅    | Requires v05.00+
| No jQuery           | ✅    | Since v4
| Live Demo           | ➖    |
| Install Checklist   | ✅    | See [Installation](https://azing.org/2sxc/r/_fpa_ZHf) on [azing.org](https://azing.org/2sxc)
| Source & License    | ✅    | included, MIT
| App Catalog         | ✅    | See [app catalog](https://2sxc.org/en/apps/app/faq4-hybrid-for-dnn-and-oqtane)
| Screenshots         | ✅    | See [app catalog](https://2sxc.org/en/apps/app/faq4-hybrid-for-dnn-and-oqtane)
| Best Practices      | ✅    | Uses v16.01 conventions
| Bootstrap 3         | ✅    | v3 optimized
| Bootstrap 4         | ✅    | v4 optimized
| Bootstrap 5         | ✅    | v5 optimized

## Customize the App

You can enable/disable categories in the app settings and change the label for the "Show all" button in the app resources.

If you want to customize the CSS, you will usually follow the ["Create Custom Styles in a Standard 2sxc App" checklist](https://azing.org/2sxc/r/gg_aB9FD)

## History

* v.4 2021-09
  * Now Hybrid, works in Dnn and Oqtane
  * Updated to latest 12.05 standards
  * No more jQuery
  * Renamed AppFolder to contain latest version
  * App has a new GUID for identification allowing side-by-side install with older swiper
* v.04.02.00 2022-04
  * Added BS5 accordion component
  * Moved access to services to ToSic.Sxc.Services
  * Replaced data-enableoptimization with IPageService.AssetAttributes()
* v.04.03.00 2022-06
  * Changed all base classes to their 2sxc 14 equivalents
  * Removed all GetService<> and replaced it with ServiceKit14
    * Updated Webpack
    * Changed all toolbars to use the IToolbarService
* v.04.04.00 2023-02
  * Replaced Tag.Custom with `Kit.HtmlTags`
  * Replaced turnOn Tag with `Kit.Page.TurnOn`
  * Removed _ from Filenames
  * Code in one file the bs5, less duplicated code
* v04.05.00 2023-07
  * 2sxc 16.02 coding conventions
  * everything typed
* v04.17.00 2024-04
  * strong Typed
  * Auto Generated Class
* v04.17.01 2024-07
  * Update app.sln and app.csproj
  