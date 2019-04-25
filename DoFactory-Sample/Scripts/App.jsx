// Copied from http://jsbin.com/mipesawapi/edit?html,js,output,
// found as a link at https://github.com/reactjs/react-autocomplete
class MyInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }

    render() {
        return (
            <ReactAutocomplete
                items={[
                    { id: 'foo', label: 'foo' },
                    { id: 'bar', label: 'bar' },
                    { id: 'baz', label: 'baz' },
                    { id: 'lemon', label: 'lemon' },
                    { id: 'lime', label: 'lime' },
                ]}
                shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
                getItemValue={item => item.label}
                renderItem={(item, highlighted) =>
                    <div
                        key={item.id}
                        style={{ backgroundColor: highlighted ? '#eee' : 'transparent' }}
                    >
                        {item.label}
                    </div>
                }
                value={this.state.value}
                onChange={e => this.setState({ value: e.target.value })}
                onSelect={value => this.setState({ value })}
            />
        );
    }
}

ReactDOM.render(<MyInput />, document.getElementById('autoCompleteField'));

