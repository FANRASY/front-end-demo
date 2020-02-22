(function(){
    const { useState } = React;
    const createElement = React.createElement;
    // console.log(createElement('div',{
    //     name: 'div',
    //     id: 'content'
    // },"this.props.children"));

    class Content extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                count:1
            }
        }

        componentDidMount(){
            this.setState({count: this.state.count + 1});
            console.log(this.state.count);
            this.setState({count: this.state.count + 1});
            console.log(this.state.count);
            setTimeout(() =>{
                this.setState({count: this.state.count + 1});
                console.log(this.state.count);
                this.setState({count: this.state.count + 1});
                console.log(this.state.count);
            },2000);
        }

        static defaultProps = {
            'adress': '浙江 杭州 余杭区 ',
            'info': '📈',
            key: '000',
            name: 'div',
            id: 'content',
            __self: 'Content',
            __source: 'Source'
        }

        addClickHandle = () => {
            this.setState({ count: ++this.state.count});
        }

        minusClickHandle = () => {
            this.setState({ count: --this.state.count});
        }

        render(){
            let { count } = this.state;
            return createElement(
                'div',{ style: {'border': '1px solid red'},onClick: this.addClickHandle },
                count,
                // createElement(Input,{count: this.state.count}),
                // createElement(Button,{text: '➕',count: count,onClick: this.addClickHandle}),
                // createElement(Button,{text: '➖',count: count,onClick: this.minusClickHandle}),
            );
        }
    }

    function createMath(operator){
        return function(val,other){
            return operator(val,other);
        }
    }

    let addFn = createMath(function(a,b){
        return Number(a) + Number(b);
    });

    let minusFn = createMath(function(a,b){
        return Number(a) - Number(b);
    });

    function Button(props){
        const [count, setCount] = useState(1);

        function handle(){
            if(props.text === '➕'){
                setCount(addFn(count,1));
            }else{
                setCount(minusFn(1));
            }
        }
        
        return createElement('button',{
            count: count,
            onClick: handle,
        },count);
    }

    function Input(props){
        return createElement('input',{
            defaultProps: 1,
            value: props.count
        })
    }

    console.log(createElement(Content));

    window.onload = function(){
        let root = document.getElementById('root');
        ReactDOM.render(createElement(Content,{
                        name: 'div',
                        id: 'content'
                    }),root);
    }
})()
