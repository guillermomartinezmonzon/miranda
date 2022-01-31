import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import CardContact from "./Card";
import { selector, fetchContactList } from "../../redux/slices/ContactSlice";
import Layout from "../../components/layout";

export default function Contact() {
  const dispatch = useDispatch();

  const { contactList, loading } = useSelector(selector);

  useEffect(() => {
    dispatch(fetchContactList());
  }, []);

  function RenderTableContact() {
    return contactList.map((item, index) => {
      return <CardContact key={item.id} item={item} />;
    });
  }
  return (
        <Layout title="Contacts">
            {!loading ? <RenderTableContact/> : <h2>Loading...</h2>}
        </Layout>
    );
}
