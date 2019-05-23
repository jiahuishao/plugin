#### 自定义模糊匹配选择输入框（designerSelectComp）使用说明

插件相关说明
    
    完成时间 2019050230946
    作者 邵嘉辉
    依赖库 jQuery

插件初始化
```js
designerSelect.init(valueGroup,"");

//参数说明
//参数一:下拉框数据
//参数二:输入""默认展示全部数据
```

插件需求html
```html
<div class="designerSelect_contaner">
    <label>前端框架</label>
    <div class="designerSelect" id="numOne"> //父级id位置
        <input class="designerSelect_input">
        <div class="designerSelect_option_group"></div>
    </div>
</div>
```

插件需求数据格式
```javascript 1.8
let valueGroup = [
        {
            valueGroupBoundComp:"numOne",//父级id名称
            valueGroupValue:[            //option显示值和隐藏值
                {text:'angular1.x',value:'1'},
                {text:'angular2.x',value:'2'},
                {text:'vue1.x',value:'3'},
                {text:'vue2.x',value:'4'},
                {text:'vue3.x',value:'5'},
                {text:'react',value:'6'}
            ]
        },
        {
            valueGroupBoundComp:"numTwo",
            valueGroupValue:[
                {text:'boostrap1.0',value:'1'},
                {text:'boostrap2.0',value:'2'},
                {text:'boostrap3.0',value:'3'},
                {text:'boostrap4.0',value:'4'}
            ]
        }
    ];
```

插件依赖文件

```js
//jquery本体文件
jquery.min.js

//rem自适应文件（自制）（可选用）
tools.js

//样式文件（自制）（样式可自行更改）
designerSelect.css

//js文件（自制）
designerSelect.js

//js加载顺序   jquery本体 > rem自适应文件 > js文件
```

