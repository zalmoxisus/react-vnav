var React = require("react");
import update from 'react-addons-update';
import VNavItem from './VNavItem';

var VNav = React.createClass({
    /**
     * ReactJS rendering function.
     * @returns {XML}
     */
    render: function () {
        return <div>
            <VNavItem/>
        </div>;
    }
});

export default VNav;