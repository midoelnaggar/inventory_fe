(this.webpackJsonpinventory=this.webpackJsonpinventory||[]).push([[0],{32:function(e,t,a){e.exports=a(60)},60:function(e,t,a){"use strict";a.r(t);var n=a(0),m=a.n(n),r=a(30),i=a.n(r),l=(a(37),a(13)),o=a(1),c=a(8),s=a(9),u=a(11),h=a(10),d=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return m.a.createElement("nav",{className:"navbar navbar-dark bg-dark navbar-expand-lg"},m.a.createElement(l.b,{to:"/inventory_fe/",className:"navbar-brand"},"Inventoriesa"),m.a.createElement("div",{className:"collpase navbar-collapse"},m.a.createElement("ul",{className:"navbar-nav mr-auto"},m.a.createElement("li",{className:"navbar-item"},m.a.createElement(l.b,{to:"/inventory_fe/items",className:"nav-link"},"Items")),m.a.createElement("li",{className:"navbar-item"},m.a.createElement(l.b,{to:"/inventory_fe/create",className:"nav-link"},"Create Item")))))}}]),a}(n.Component),v=a(3),b=a(12),p=a.n(b),f=function(e){return m.a.createElement("tr",null,m.a.createElement("td",null,e.item.itemName),m.a.createElement("td",null,e.item.itemQty),m.a.createElement("td",null,e.item.itemVendor),m.a.createElement("td",null,e.item.itemPrice),m.a.createElement("td",null,m.a.createElement(l.b,{to:"/edit/"+e.item._id},"edit")," | ",m.a.createElement("a",{href:"#",onClick:function(){e.deleteItem(e.item._id)}},"delete")))},g=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).deleteItem=n.deleteItem.bind(Object(v.a)(n)),n.state={items:[]},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.a.get("http://localhost:5000/items/").then((function(t){e.setState({items:t.data})})).catch((function(e){console.log(e)}))}},{key:"deleteItem",value:function(e){p.a.delete("http://localhost:5000/items/"+e).then((function(e){console.log(e.data)})),this.setState({items:this.state.items.filter((function(t){return t._id!==e}))})}},{key:"itemList",value:function(){var e=this;return this.state.items.map((function(t){return m.a.createElement(f,{item:t,deleteItem:e.deleteItem,key:t._id})}))}},{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement("h3",null,"Logged Items"),m.a.createElement("table",{className:"table"},m.a.createElement("thead",{className:"thead-light"},m.a.createElement("tr",null,m.a.createElement("th",null,"Item name"),m.a.createElement("th",null,"Item qty"),m.a.createElement("th",null,"Item vendor"),m.a.createElement("th",null,"Item price"),m.a.createElement("th",null,"Actions"))),m.a.createElement("tbody",null,this.itemList())))}}]),a}(n.Component),E=(a(29),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).onChangeItemName=n.onChangeItemName.bind(Object(v.a)(n)),n.onChangeItemVendor=n.onChangeItemVendor.bind(Object(v.a)(n)),n.onChangeItemPrice=n.onChangeItemPrice.bind(Object(v.a)(n)),n.onSubmit=n.onSubmit.bind(Object(v.a)(n)),n.state={itemName:"",itemVendor:"",itemPrice:0},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.a.get("http://localhost:5000/items/").then((function(t){t.data.length>0&&e.setState({items:t.data.map((function(e){return e.itemName})),itemName:t.data[0].itemName})})).catch((function(e){console.log(e)}))}},{key:"onChangeItemName",value:function(e){this.setState({itemName:e.target.value})}},{key:"onChangeItemVendor",value:function(e){this.setState({itemVendor:e.target.value})}},{key:"onChangeItemPrice",value:function(e){this.setState({itemPrice:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={itemName:this.state.itemName,itemVendor:this.state.itemVendor,itemPrice:this.state.itemPrice};console.log(t),p.a.post("http://localhost:5000/items/add",t).then((function(e){return console.log(e.data)})),this.setState({itemName:"",itemVendor:"",itemPrice:0})}},{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement("h3",null,"Create New Item"),m.a.createElement("form",{onSubmit:this.onSubmit},m.a.createElement("div",{className:"form-group"},m.a.createElement("label",null,"Item name: "),m.a.createElement("input",{ref:"userInput",required:!0,className:"form-control",value:this.state.itemName,onChange:this.onChangeItemName})),m.a.createElement("div",{className:"form-group"},m.a.createElement("label",null,"Item vendor: "),m.a.createElement("input",{type:"text",required:!0,className:"form-control",value:this.state.itemVendor,onChange:this.onChangeItemVendor})),m.a.createElement("div",{className:"form-group"},m.a.createElement("label",null,"Item price: "),m.a.createElement("input",{type:"text",required:!0,className:"form-control",value:this.state.itemPrice,onChange:this.onChangeItemPrice})),m.a.createElement("div",{className:"form-group"},m.a.createElement("input",{type:"submit",value:"Create Item",className:"btn btn-primary"}))))}}]),a}(n.Component)),I=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement("img",{className:"w-100 p-3",src:"https://www.orderhive.com/wp-content/uploads/2020/04/banner_inventory_management.png"}))}}]),a}(n.Component),N=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).onChangeItemName=n.onChangeItemName.bind(Object(v.a)(n)),n.onChangeItemQty=n.onChangeItemQty.bind(Object(v.a)(n)),n.onChangeItemVendor=n.onChangeItemVendor.bind(Object(v.a)(n)),n.onChangeItemPrice=n.onChangeItemPrice.bind(Object(v.a)(n)),n.onSubmit=n.onSubmit.bind(Object(v.a)(n)),n.state={itemName:"",itemQty:0,itemVendor:"",itemPrice:0},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.a.get("http://localhost:5000/items/"+this.props.match.params.id).then((function(t){e.setState({itemName:t.data.itemName,itemQty:t.data.itemQty,itemVendor:t.data.itemVendor,itemPrice:t.data.itemPrice})})).catch((function(e){console.log(e)}))}},{key:"onChangeItemName",value:function(e){this.setState({itemName:e.target.value}),console.log(this.state)}},{key:"onChangeItemQty",value:function(e){this.setState({itemQty:e.target.value})}},{key:"onChangeItemVendor",value:function(e){this.setState({itemVendor:e.target.value})}},{key:"onChangeItemPrice",value:function(e){this.setState({itemPrice:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={itemName:this.state.itemName,itemQty:this.state.itemQty,itemVendor:this.state.itemVendor,itemPrice:this.state.itemPrice};console.log(t),p.a.post("http://localhost:5000/items/update/"+this.props.match.params.id,t).then((function(e){return console.log(e.data)})),window.location="/"}},{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement("h3",null,"Edit Item Log"),m.a.createElement("form",{onSubmit:this.onSubmit},m.a.createElement("div",{className:"form-group"},m.a.createElement("label",null,"Item Name: "),m.a.createElement("input",{type:"text",required:!0,className:"form-control",value:this.state.itemName,onChange:this.onChangeItemName})),m.a.createElement("div",{className:"form-group"},m.a.createElement("label",null,"Item Qty: "),m.a.createElement("input",{ref:"itemQtyInput",required:!0,className:"form-control",value:this.state.itemQty,onChange:this.onChangeItemQty})),m.a.createElement("div",{className:"form-group"},m.a.createElement("label",null,"Item Vendor: "),m.a.createElement("input",{ref:"itemVendorInput",required:!0,className:"form-control",value:this.state.itemVendor,onChange:this.onChangeItemVendor})),m.a.createElement("div",{className:"form-group"},m.a.createElement("label",null,"Item Price: "),m.a.createElement("input",{ref:"itemPriceInput",required:!0,className:"form-control",value:this.state.itemPrice,onChange:this.onChangeItemPrice})),m.a.createElement("div",{className:"form-group"},m.a.createElement("input",{type:"submit",value:"Edit item",className:"btn btn-primary"}))))}}]),a}(n.Component);var y=function(){return m.a.createElement(l.a,null,m.a.createElement("div",{className:"container"},m.a.createElement(d,null),m.a.createElement("br",null),m.a.createElement(o.a,{path:"/inventory_fe/",exact:!0,component:I}),m.a.createElement(o.a,{path:"/inventory_fe/create",component:E}),m.a.createElement(o.a,{path:"/inventory_fe/items",component:g}),m.a.createElement(o.a,{path:"/inventory_fe/edit/:id",component:N})))};i.a.render(m.a.createElement(y,null),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.51777148.chunk.js.map