import PropTypes from 'prop-types';

const Header = (props) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <p>{props.des}</p>

            <ul>
                <li>Homepage</li>
                <li>About us</li>
                <li>Our goals</li>
                <li>Github repository</li>
            </ul> 
        </div>
    );
};

Header.propTypes = {
    title: PropTypes.string,
    des: PropTypes.string
};

export default Header;
