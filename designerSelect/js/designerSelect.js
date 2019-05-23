$(function () {
    let valueGroup = [
        {
            valueGroupBoundComp:"jiahui",
            valueGroupValue:[
                {text:'jiahui1',value:'1'},
                {text:'jiahui2',value:'2'},
                {text:'jiahui3',value:'3'},
                {text:'jiahui5',value:'5'},
            ]
        },
        {
            valueGroupBoundComp:"numOne",
            valueGroupValue:[
                {text:'angular1.x',value:'1'},
                {text:'angular2.x',value:'2'},
                {text:'vue1.x',value:'3'},
                {text:'vue2.x',value:'4'},
                {text:'vue3.x',value:'5'},
                {text:'react',value:'6'},
            ]
        },
        {
            valueGroupBoundComp:"numTwo",
            valueGroupValue:[
                {text:'boostrap1.0',value:'1'},
                {text:'boostrap2.0',value:'2'},
                {text:'boostrap3.0',value:'3'},
                {text:'boostrap4.0',value:'4'},
            ]
        }
    ]
    //插件初始化
    designerSelect.init(valueGroup,"");
})

var designerSelect = {
    designerSelectParam:{},
    init:function (optionValue) {

        //自适应初始化
        tools.adaptable(12,1366);

        //生成option&&数据写入
        optionValue.forEach(a=>{
            designerSelect.designerSelectParam[a.valueGroupBoundComp] = a.valueGroupValue;
            designerSelect.buildOptionGroup(a,"");
            $(".designerSelect_option_group").hide();
        })

        //点击展开事件
        $(".designerSelect_input").click(function (event) {
            $(".designerSelect_option_group").hide();
            $(this).parent().children('.designerSelect_option_group').show();
            event.stopPropagation();
        });
        $("body").click(function (event) {
            $(".designerSelect_option_group").hide();
        });

        // 绑定keyup事件
        $(".designerSelect_input").keyup(function () {
            let id = $(this).parent().attr('id');
            designerSelect.buildOptionGroup({
                valueGroupBoundComp:id,
                valueGroupValue:designerSelect.designerSelectParam[id]
            },$(this).val())
        });

        //option绑定click填充事件
        $(".designerSelect_option_group").on("click",".designerSelect_option",function () {
            $(this).parent().parent().children(".designerSelect_input").val($(this).html());
            $(this).parent().parent().children(".designerSelect_input").data("value",$(this).data("value"));
        });

    },

    //生成option方法体
    buildOptionGroup:function (option,matchValue) {
        let html = "";
        let compName = option.valueGroupBoundComp;
        let compValue = option.valueGroupValue;
        if(matchValue == ""){
            compValue.forEach(a=>{
                html += "<div class='designerSelect_option' data-value='" + a.value + "'>" + a.text + "</div>";
            });
        }else{
            compValue.forEach(a=>{
                if(a.text.indexOf(matchValue) >= 0){
                    html += "<div class='designerSelect_option' data-value='" + a.value + "'>" + a.text + "</div>";
                }
            });
        }
        $("#" + compName).children(".designerSelect_option_group").html(html);
    },
}