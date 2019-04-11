import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    {/* Linking to internal link using Link tag */}
    404 Not Found! <Link to="/">Go home</Link>
  </div>
);

export default NotFoundPage;