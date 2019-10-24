import * as React from 'react';
import { hot } from 'react-hot-loader';
import '../styles/app.sass';

interface AppProps {
    addText: any;
    text: string;
}

interface AppState {
    previewText: string;
}

/**
 * Base React component of the application
 */
class App extends React.Component<AppProps, AppState> {
    private textRef = React.createRef<HTMLInputElement>()
    
    public state: AppState = {
        previewText: null
    }

    /**
     * Render lines
     * 
     * @param {Array} textStrings - The string we want to render.
     * @returns {JSX} lines to be rendered
     */
    renderTextLines(textStrings: any = []) {
        let textHtml = textStrings.map( (text: any, i: any) => <li className="text" key={i}>{ text }</li> );

        return (
            <ul>{ textHtml }</ul>
        );
    }

    /**
     * Handle changes in input form element
     * 
     * @fires setState()
     */
    handleChange(event: React.FormEvent<HTMLInputElement>) {
        const { value }: any = event.target;
        this.setState({
            previewText: value
        });
    }

    /**
     * Handle form submission
     * 
     * @fires addText() action creator
     */
    handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const text: string = this.textRef.current.value;
        // dispatch Redux action
        this.props.addText(text);
    }

    render() {
        return (
            <div>
                <h2>Secret code generator 😁</h2>
                <form onSubmit={ this.handleSubmit.bind(this) }>
                    <input type="text" ref={this.textRef} placeholder="write some text here" onChange={ this.handleChange.bind(this) } />
                    <input type="submit" value="Add" />
                </form>
                <p className="preview">{ this.state.previewText }</p>
                <h4>Previously added</h4>
                { this.renderTextLines(this.props.text) }
            </div>
        );
    }
    
}

export default hot(module)(App);

