import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Jsme } from 'jsme-react';

export default class DashJsme extends Component {
    constructor(props) {
        super(props);
        // Setup internal reference to determine if render necessary
        this.smiles = this.props.smiles;
        this.atomsMark = this.props.atomsMark;
        this.bondsMark = this.props.bondsMark;
        // State used to update jsme react component
        // id used to ensure update will occur
        this.state = {
            smiles: { id: 0, string: this.props.smiles },
            atomsMark: { id: 0, string: this.props.atomsMark },
            bondsMark: { id: 0, string: this.props.bondsMark },
        } 
    }
    ref = null;

    //Update smiles prop
    smilesUpdate = (smiles) => {
        // update internal reference but don't setState otherwise molecule duplication
        this.smiles = smiles;
        if (smiles !== this.props.smiles) {
            this.props.setProps({smiles: smiles});
        }
    }
    
    // jsme event info
    jmeEvent = (event) => {
        this.props.setProps({jmeEvent: event})
    }

    // atom clicked
    atomClick = (atom) => {
        this.props.setProps({atomClick: atom})
    }

    // bond clicked
    bondClick = (bond) => {
        this.props.setProps({bondClick: bond})
    }

    // atom highlighted
    atomHover = (atom) => {
        this.props.setProps({atomHover: atom});
    }

    // bond highlighted
    bondHover = (bond) => {
        this.props.setProps({bondHover: bond});
    }
    
    // update jsme react here via state
    componentDidUpdate(prevProps) {
        const { smiles, atomsMark, bondsMark} = this.props;
        // check if prop updated and not equal to internal reference before setState
        // Duplication of molecule occurs if updating too frequently
        // id used to ensure update of jsme react pure component
        if (smiles != prevProps.smiles && smiles != this.smiles) {
            this.smiles = smiles;
            let id = this.state.smiles.id
            this.setState({smiles: {id: id+1, string: smiles}})
            // atom and bond marks lost on smiles update
            // clear internal reference so atom and bonds can be marked again
            this.atomsMark = '';
            this.bondsMark = '';
        }
        // mark atoms
        if (atomsMark != this.atomsMark) {
            this.atomsMark = atomsMark;
            let id = this.state.atomsMark.id;
            this.setState({atomsMark: {id: id+1, string: atomsMark}})
        }
        // mark bonds
        if (bondsMark != this.bondsMark) {
            this.bondsMark = bondsMark;
            let id = this.state.bondsMark.id;
            this.setState({bondsMark: {id: id+1, string: bondsMark}})
        }
    }
    render() {
        const { id, height, width, options, src, lineWidth, actionCode } = this.props;
        return (
            <div id={id}>
                 <Jsme 
                    ref={ref => (this.ref = ref)}
                    id={id}
                    height={ height }
                    width={ width }
                    options={ options }
                    smiles={ this.state.smiles }
                    onChange={ this.smilesUpdate }
                    atomHover= { this.atomHover }
                    atomClick = { this.atomClick }
                    bondHover= { this.bondHover }
                    bondClick = { this.bondClick }
                    jmeEvent = { this.jmeEvent }
                    src={ src }
                    lineWidth={ lineWidth }
                    atomsMark={ this.state.atomsMark }
                    bondsMark={ this.state.bondsMark }
                    actionCode={ actionCode }
                />
            </div>
        );
    }
}

DashJsme.defaultProps = {
    smiles: '',
    lineWidth: 1.5,
    atomsMark: '',
    bondsMark: '',
    height: '400px',
    width: '400px',
};

DashJsme.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * The height of rendered componenet
     */
    height: PropTypes.string,

    /**
     * The width of rendered compnent
     */
    width: PropTypes.string,

    /**
    * The options for rendered component
    */
    options: PropTypes.string,

     /**
    * The smiles string of component
    */
    smiles: PropTypes.string,

    /**
    * The line width of component
    */
    lineWidth: PropTypes.number,

    /**
    * The highlighted Atom
    */
    atomHover: PropTypes.number,

    /**
    * The highlighted bond
    */
    bondHover: PropTypes.number,

    /**
    * The atom clicked of component
    */
    atomClick: PropTypes.number,

    /**
    * The bond clicked of component
    */
    bondClick: PropTypes.number,

    /**
    * The atoms marked string atom,color
    */
    atomsMark: PropTypes.string,

    /**
    * The bonds marked string bond,color
    */
    bondsMark: PropTypes.string,

    /**
    * jsmeEvent information
    */
    jmeEvent: PropTypes.object,

     /**
    * The source url for jsme.nocache.js
    */
    src: PropTypes.string,

     /**
    * set  action code for menu 
    */
    actionCode: PropTypes.number,
    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,
};
