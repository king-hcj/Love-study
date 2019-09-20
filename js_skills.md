# JS技巧
1. JS计数器的几种实现
   - 全局变量
    ```
    let count = 0;
    const countUp = () => count++;
    ```
   - 闭包
   ```
   // javascript
    const countUp = (() => {
    let count = 0;
    return () => {
        return ++count;
    };
    })();
    console.log(countUp()); // 1
    console.log(countUp()); // 2
   ```
   - 函数属性
   ```
   // javascript
    let countUp = () => {
    return ++countUp.count;
    };
    countUp.count = 0;
    console.log(countUp()); // 1
    console.log(countUp()); // 2
   ```
   - 函数属性(TS)
   ```
   interface Counter {
    (): void; // 这里定义Counter这个结构必须包含一个函数，函数的要求是无参数，返回值为void，即无返回值
    count: number; // 而且这个结构还必须包含一个名为count、值的类型为number类型的属性
    }
    const getCounter = (): Counter => { // 这里定义一个函数用来返回这个计数器
    const c = () => { // 定义一个函数，逻辑和前面例子的一样
        c.count++;
    };
    c.count = 0; // 再给这个函数添加一个count属性初始值为0
    return c; // 最后返回这个函数对象
    };
    const counter: Counter = getCounter(); // 通过getCounter函数得到这个计数器
    counter();
    console.log(counter.count); // 1
    counter();
    console.log(counter.count); // 2
   ```
