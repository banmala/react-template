// import { MBackdrop } from 'components';
// import { Suspense } from 'react';
// import { Navigate } from 'react-router-dom';
// import { PermittedRoutesProps } from './interface/PermittedRoutes.interface';

// const PermittedRoutes = ({permission, Component}: PermittedRoutesProps): JSX.Element => {
//     const token: string | null = localStorage.getItem('token');

//     if (!token) {
//         return <Navigate to="/login" replace />;
//     }

//     const userPermission = ['dashboard', 'settings']

//     const isAuthorized = (): boolean => {
//         return userPermission.some((element) => {
//             return permission.includes(element)
//         })
//     }

//     if (!isAuthorized()) {
//         return <Navigate to="/" replace />;
//     }

//     return (
//         <Suspense fallback={<MBackdrop open={true} size={100}/>}>
//             <Component />
//         </Suspense>
//     )
// }

// export default PermittedRoutes;
