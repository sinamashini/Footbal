export const GRID_DEFAULT_LOCALE_TEXT = {
    // Root
    rootGridLabel: 'جدول',
    noRowsLabel: 'سطری برای نمایش وجود ندارد',
    errorOverlayDefaultLabel: 'مشکلی پیش آمده است',

    // Density selector toolbar button text
    toolbarDensity: 'اندازه سطر ها',
    toolbarDensityLabel: 'اندازه سطر ها',
    toolbarDensityCompact: 'فشرده',
    toolbarDensityStandard: 'استاندارد',
    toolbarDensityComfortable: 'راحت',

    // Columns selector toolbar button text
    toolbarColumns: 'ستونها',
    toolbarColumnsLabel: 'انتخاب ستونها',

    // Filters toolbar button text
    toolbarFilters: 'فیلترها',
    toolbarFiltersLabel: 'نمایش فیلترها',
    toolbarFiltersTooltipHide: 'مخفی کردن فیلترها',
    toolbarFiltersTooltipShow: 'نمایش فیلترها',
    toolbarFiltersTooltipActive: (count) =>
        count !== 1 ? `${count} فیلتر فعال` : `${count} فیلتر فعال`,

    // Export selector toolbar button text
    toolbarExport: 'استخراج',
    toolbarExportLabel: 'استخرج',
    toolbarExportCSV: 'دانلود CSV',

    // Columns panel text
    columnsPanelTextFieldLabel: 'پیدا کردن ستون',
    columnsPanelTextFieldPlaceholder: 'عنوان ستون',
    columnsPanelDragIconLabel: 'مرتب سازی',
    columnsPanelShowAllButton: 'نمایش همه',
    columnsPanelHideAllButton: 'مخفی کردن همه',

    // Filter panel text
    filterPanelAddFilter: 'اضافه کردن فیلتر',
    filterPanelDeleteIconLabel: 'پاک کردن',
    filterPanelOperators: 'اپراتورها',
    filterPanelOperatorAnd: 'و',
    filterPanelOperatorOr: 'یا',
    filterPanelColumns: 'ستونها',
    filterPanelInputLabel: 'مقادیر',
    filterPanelInputPlaceholder: 'مقدار فیلتر',

    // Filter operators text
    filterOperatorContains: 'شامل',
    filterOperatorEquals: 'مساوی',
    filterOperatorStartsWith: 'شروع با',
    filterOperatorEndsWith: 'پایان با',
    filterOperatorIs: 'مساوی',
    filterOperatorNot: 'مخالف',
    filterOperatorAfter: 'بعد از',
    filterOperatorOnOrAfter: 'مساوی یا بعد از',
    filterOperatorBefore: 'قبل از',
    filterOperatorOnOrBefore: 'مساوی یا قبل از',

    // Column menu text
    columnMenuLabel: 'منو',
    columnMenuShowColumns: 'نمایش ستونها',
    columnMenuFilter: 'فیلترها',
    columnMenuHideColumn: 'مخفی کردن',
    columnMenuUnsort: 'مرتب نشده',
    columnMenuSortAsc: 'مرتب سازی صعودی',
    columnMenuSortDesc: 'مرتب سازی نزولی',

    // Column header text
    columnHeaderFiltersTooltipActive: (count) =>
        count !== 1 ? `${count} فیلتر فعال` : `${count} فیلتر فعال`,
    columnHeaderFiltersLabel: 'نمایش فیلترها',
    columnHeaderSortIconLabel: 'مرتب سازی',

    // Rows selected footer text
    footerRowSelected: (count) =>
        count !== 1
            ? `${count.toLocaleString()} سطر انتخاب شده`
            : `${count.toLocaleString()} سطر انتخاب شده`,

    // Total rows footer text
    footerTotalRows: 'مجموع سطرها:',
};