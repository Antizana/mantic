import React, { memo, lazy, Suspense } from "react";

const ProfileForm = lazy(() => import("./ProfileForm"));
const UserInfo = lazy(() => import("./UserInfo"));

const UserProfile = memo(() => (
  <div className="content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-8">
          <Suspense fallback={<div>Loading...</div>}>
            <ProfileForm key="ProfileForm" />
          </Suspense>
        </div>
        <div className="col-md-4">
          <Suspense fallback={<div>Loading...</div>}>
            <UserInfo key="UserInfo" />
          </Suspense>
        </div>
      </div>
    </div>
  </div>
));

export default UserProfile;
