/**
 * Created by lenovo on 2015/7/22.
 */

var Pie = document.getElementById('pie');
var LineBar = document.getElementById('line_bar');
var Pie_Li = Pie.getElementsByTagName('li');
var LineBar_Li = LineBar.getElementsByTagName('li');
var Pie_Div = Pie.getElementsByTagName('div');
var LineBar_Div = LineBar.getElementsByTagName('div');

function Tab(oLi,oDiv){
    for(var i = 0,len = oLi.length; i < len; i++){
        oLi[i].index = i;
        oLi[i].onclick = function(){
            for(var i = 0,len = Pie_Li.length; i < len; i++){
                oLi[i].className = " ";
                oDiv[i].className = " ";
            }
            this.className = "active_li";
            oDiv[this.index].className = "active_div";
        }
    }
}

Tab(Pie_Li,Pie_Div);
Tab(LineBar_Li,LineBar_Div);