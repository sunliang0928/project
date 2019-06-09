# ES6
### 1. let与const
    (1) 没有变量提升
    (2) 有块级作用域
    (3) 不允许重复声明
    (4) 存在暂时性死区

### 2. Object.defineProperty(obj, prop, desc)
    1.obj 需要定义属性的当前对象
    2.prop 当前需要定义的属性名
    3.desc 属性描述符

#####  属性描述符：writable, configurable, enumerable, value, get/set
###### 2.1 writable 是否可写
    Object.defineProperty(obj, 'a', {
        writable: false
    })
###### 2.2 configurable  是否可被删除
    Object.defineProperty(obj, 'a', {
        configurable: false
    })
###### 2.3 enumerable  是否可被枚举
    Object.defineProperty(obj, 'a', {
        enumerable: false
    })
###### 2.4 value  修改value值
    Object.defineProperty(obj, 'a', {
        value: 1000
    })
###### 2.5 get/set
    Object.defineProperty(obj, 'a', {
        get(){
            return '30'
        },
        set(val){
            console.log(val)  // 30
        }
    })

    get: 获取属性时执行
    set: 设置属性值时执行

 ### 3. proxy  代理
         
    var obj2 = {};
    var proxy = new Proxy(obj2, {
        get(tar, key){  // 获取值
            console.log("get.....",tar,key)
        },
        set(tar, key, val){  // 设置值
            console.log("set.....",tar,key,val)
        }
    })
    它的作用是在对象和和对象的属性值之间设置一个代理，获取该对象的值或者设置该对象的值，以及实例化等等多种操作，都会被拦截住，
    经过这一层我们可以统一处理，我们可以认为它就是“代理器” 

    Proxy是一个构造函数， 使用new Proxy创建代理器， 第一个参数为一个对象， 第二个参数也为一个对象， 返回被包裹后的代理器

### 4. Promise

Promise的三种状态： pending , fulfilled , rejected

    new Promise((resolve,reject)=>{
        resolve: 用于处理成功的结果
        reject:  用于处理失败的结果
    })

解决异步回调嵌套问题

    function loadImg(src){
        let img = new Image();
        img.src = src;
        return new Promise((resolve,reject)=>{
            img.onload = function(){
                resolve(img)
            };
            img.onerror = function(e){
                reject(e)
            }
        })
    }

    const src = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560672611&di=11e8e71eae844b3deca7dc4c181fb718&imgtype=jpg&er=1&src=http%3A%2F%2Fdata.whicdn.com%2Fimages%2F151369381%2Flarge.jpg';

    loadImg(src).then(res=>{
        document.body.appendChild(res)
        // return Promise.resolve('555')
        return Promise.reject('error')
    },err=>{
        console.log(err);           
    }).then(res2=>{
        console.log('res2.....',res2)
    },err2=>{
        console.log('err2.....',err2)
    }).then(res3=>{
        console.log('res3.....',res3)
    },err3=>{
        console.log('err3.....',err3)
    }).catch(error=>{
        console.log('catch....',error)
    })
    