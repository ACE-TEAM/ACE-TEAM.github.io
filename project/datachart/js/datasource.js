/**
 * Created by lenovo on 2015/7/22.
 */
<!-- 以下是设置从Excel中加载数据-->
function importXLSX(field){
    var fullpath = window.document.location.pathname;
    var pos1 = fullpath.indexOf("/");
    var fileName1 = fullpath.substring(pos1+1);
    var pos2 = fileName1.lastIndexOf("/");

    var fileName = fileName1.substring(0,pos2) + "/aqidata.xlsx";// xlsx文件的路径

    objCon = new XMLHttpRequest("ADODB.Connection");
    objCon.Provider = "Microsoft.Jet.OLEDB.4.0";
    objCon.ConnectionString = "Data Source=" + fileName + ";Extended Properties=Excel 8.0;";
    objCon.CursorLocation = 1;
    objCon.Open;
    var strQuery;

    //Get the SheetName
    var strSheetName = "Sheet1$"; //要导入的sheet的名字

    var rsTemp =   new XMLHttpRequest("ADODB.Recordset");
    rsTemp = objCon.OpenSchema(20);
    if(!rsTemp.EOF)strSheetName = rsTemp.Fields("Table_Name").Value;
    rsTemp = null;

    rsExcel =   new XMLHttpRequest("ADODB.Recordset");
    strQuery = "SELECT * FROM [" + strSheetName + "]";
    rsExcel.ActiveConnection = objCon;
    rsExcel.Open(strQuery);

    var res = [];
    var temp;
    while(!rsExcel.EOF){
        temp = rsExcel.Fields(field).value;
        res.push(temp);
        rsExcel.MoveNext;
    }

    // Close the connection and dispose the file
    objCon.Close;
    objCon =null;
    rsExcel = null;
    return res;
}