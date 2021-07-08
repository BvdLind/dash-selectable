import React, {Component, useEffect} from 'react';
import PropTypes from 'prop-types';

const SelectableWrapper = ({parentId, setProps, children}) => {
    useEffect(() => {
        function handleSelected(e) {
            setProps({selectedValue: document.getSelection().toString()});
        }

        document.addEventListener('selectionchange', handleSelected);

        return () => {
            document.removeEventListener('selectionchange', handleSelected);
        };
    }, []);
    return children;
};

/**
 * Contains a wrapper component which attaches an event that listens
 * for selection of elements in the document
 */
export default class DashSelectable extends Component {
    render() {
        const {id, setProps, children} = this.props;

        return (
            <div id={id}>
                <SelectableWrapper parentId={id} setProps={setProps}>
                    {children}
                </SelectableWrapper>
            </div>
        );
    }
}

DashSelectable.defaultProps = {};

DashSelectable.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,

    /**
     * Child components
     */
    children: PropTypes.node,

    /**
     * Selected value
     */
    selectedValue: PropTypes.string,
};
