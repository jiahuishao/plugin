#### bsgrid自制分页器（designerBsgridPaging）使用说明

插件相关说明
    
    完成时间 201905231503
    作者 邵嘉辉
    依赖 jQuery  bsgird

插件初始化
```js
//为分页按钮绑定事件
designerBsgridPaging.designerPageBar.init()

//触发生成分页器事件
designerBsgridPaging.designerPageBar.countPage(res.responseJSON.totalRows)
//参数说明
//参数一:不分页情况下的所有信息条数
```

插件需求html
```html
<!--附赠打印，导出按钮，按需自行选择，
如果不需要，删除html的div.table_tools_btn_group,
同时将.function_group的justify-content属性值换成flex-end-->

<div class="funtion_group">
    <div class="table_tools_btn_group">
        <button class="stamp"><i class="stamp_icon"></i>打印</button>
        <button class="load_out" onclick="cashPostalParkTools.loadOut()"><i class="load_out_icon"></i>导出</button>
    </div>
    <div class="turn_page_btn_group">
        <button class="page_up">上一页</button>
        <div class="page_index"></div>
        <button class="page_down">下一页</button>
        <p class="page_overview">共20页/100条记录</p>
        <p>到第</p>&nbsp;<input class="go_page_index" type="number" min="0">&nbsp;<p>页</p>
        <button class="go_page">确定</button>
    </div>
</div>
```

插件需求数据格式
```javascript 1.8
//请在调用触发生成分页器事件的代码的父作用域中添加如下值

billTableParam:{
    curPage: 1,//当前页数
    pageSize: 10,//每个页面容纳的数据条数
}
```

插件依赖文件

```js
//jquery已经bsgrid本体文件
jquery.min.js 
grid.zh-CN.min.js
bsgrid.all.min.js

//样式文件（自制）（样式可自行更改）
designerBsgridPaging.css

//js文件（自制）
designerBsgridPaging.js

//js加载顺序   jquery本体 > rem自适应文件 > js文件
```

备注

> 本插件极其鸡肋，只能在使用bsgrid时使用，请谨慎使用
> 我封装他只是因为公司需要，以后自用方便

双重备注

> 如果看不懂，自行参考html文件中的例子
