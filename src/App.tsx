import { ReactComponent as ReactIcon } from "@/assets/react.svg";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./reducers";
import { getUserStart, getUserSuccess } from "./reducers/user";

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  useEffect(() => {
    dispatch(
      getUserSuccess({ email: "test@gmail.com", id: 100, name: "Test User" })
    );
  }, [dispatch]);

  return (
    <div>
      <ReactIcon width={48} height={48} />
      {user.loading && <p>Loading user...</p>}
      {user.error && <p>{user.error}</p>}
      {!user.loading && !user.error && (
        <div>
          <p>User ID: {user.id}</p>
          <p>User Name: {user.name}</p>
          <p>User Email: {user.email}</p>
        </div>
      )}
    </div>
  );
};

export default App;
