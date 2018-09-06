/*
*
* 树形菜单导航
* */
$(document).ready(function () {
    var isFirstMenu;
    var menulist = options;//引入配置列表
    $(window).load(function(){
        var showlist = $("<ul class=\"sidebar-menu\"></ul>");
        $("<li class=\"header\">主导航</li>").appendTo(showlist);
        isFirstMenu=menulist.extend.children.length;
        showall(menulist.extend.children, showlist);
        $("#div_menu").append(showlist);
    });
     function showall(menu_list, parent) {
        for (var menu in menu_list) {
            if (menu_list[menu].children.length > 0) {
                var li = $("<li></li>");
                if(isFirstMenu==0){
                    li = $('<li id="'+menu_list[menu].id+'"></li>');
                }else{
                    li = $("<li class=\"treeview active\"></li>");
                    isFirstMenu=isFirstMenu-1;
                }
                //导入根菜单
                $(li).append('<a  href="'+menu_list[menu].url+'"><i class="'+menu_list[menu].icons+'"></i> <span>'+menu_list[menu].text+'</span><i class="fa fa-angle-right pull-right"></i></a>');

                var nextParent=$("<ul class=\"treeview-menu\"></ul>");
                $(nextParent).appendTo(li);
                $(li).appendTo(parent);
                showall(menu_list[menu].children, nextParent);
            }
            else {

                $('<li id="'+menu_list[menu].id+'"><a  href="'+menu_list[menu].url+'"><i class="'+menu_list[menu].icons+'"></i>'+menu_list[menu].text+'</a></li>').appendTo(parent);
            }
        }
    }

});