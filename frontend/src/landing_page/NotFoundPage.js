import React from 'react';
function NotFoundPage() {
    return ( 
        <div className='container p-5 '>
            <div className='row p-5 text-center'>
                <h1 className='fs-3 mb-4'>404 Page Not Found</h1>
                <p className='fs-6 mb-4 text-muted'>Sorry, the page you are looking for does't exist.</p>
            </div>
        </div>
     );
}

export default NotFoundPage;