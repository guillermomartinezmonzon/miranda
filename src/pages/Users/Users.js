import { useDispatch, useSelector } from "react-redux";
import CardUser from "./Card";
import { fetchUsersList, selector } from "../../redux/slices/UsersSlice";
import { useEffect } from "react";
import Layout from "../../components/layout";

export default function Users() {
  const dispatch = useDispatch();

  const { usersList, loading } = useSelector(selector);

  useEffect(() => {
    dispatch(fetchUsersList());
  }, []);

  function RenderTableUsers() {
    return usersList.map((user, index) => {
      return <CardUser key={user.id} user={user} />;
    });
  }
  return (
      <Layout title="Users">
          {!loading && <RenderTableUsers/>}
      </Layout>
  );
}
