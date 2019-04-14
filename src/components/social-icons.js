import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import contactList from "./../data/contacts.json";
import './../styles/social-icons.scss';

const SocialIcons = () => {
  
  return (
    <div className="social-icons animate-icons">
      {contactList.map(contact => (
        <a
          href={contact.url}
          target="_blank"
          title={`External link to my ${contact.name} account`}
          className="btn-social-icon"
          rel="noopener noreferrer"
          key={contact.url}
        >
        <FontAwesomeIcon icon={['fab', contact.icon]} />
        </a>
    ))}

      </div>
  );
};


export default SocialIcons;