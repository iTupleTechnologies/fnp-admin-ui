const widgets: any = {};
export default function WidgetLibrary({
    widgetName,
    value,
    rowData,
}: {
    widgetName: string;
    value: string;
    rowData?: any;
}) {
    return widgets[widgetName](value, rowData);
}
