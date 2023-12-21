import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DataProvider } from './Component/DataContext';
import SubmitProject from './Component/SubmitProject';
import ShowCompany from './Component/ShowCompany';
import Header from './Component/Header';
import Banner from './Component/Banner';
import Footer from './Component/footer'
import Listed from './Component/Listed';
import Login from './Component/Login';
import Forget from './Component/Forget';
import Register from './Component/Register';
import Blog from './Component/Blog';
import Tool from './Component/Tool';
import GetListedForm from './Component/GetListedForm';
import Home from './Component/Home';
import Crausel from "./Component/Crausel"
import GetListedRegister from './Component/GetListedRegister';
import Varification from './Component/Varification';
import ViewBlog from './Component/ViewBlog';
import PasswordForm from './Component/PasswordForm';
import EnquiryForm from './Component/EnquiryForm'
import Modal from './Component/Modal'
import ViewCompany from './Component/ViewCompany'
import BannerShowCompany from './Component/BannerShowCompany'
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <DataProvider> {/* Wrap your components with DataProvider */}
      <BrowserRouter>
        <Header />
        <Routes>

          <Route exact path="/Home" element={<Banner />} />
          <Route exact path="/Listed" element={<Listed />} />
          <Route exact path="/SubmitProject" element={<SubmitProject />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Forget" element={<Forget />} />
          <Route exact path="/Register" element={<Register />} />
          <Route exact path="/Blog" element={<Blog />} />
          <Route exact path="/Tool" element={<Tool />} />
          <Route exact path="/ShowCompany" element={<ShowCompany />} />
          <Route exact path="/GetListedForm" element={<GetListedForm />} />
          <Route exact path="/Crausel" element={<Crausel />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/GetListedRegister" element={<GetListedRegister />} />
          <Route exact path="/Varification" element={<Varification />} />
          <Route exact path="/ViewBlog" element={<ViewBlog />} />
          <Route exact path="/PasswordForm" element={<PasswordForm />} />
          <Route exact path="/EnquiryForm" element={<EnquiryForm />} />
          <Route exact path="/Modal" element={<Modal />} />
          <Route exact path="/viewCompany" element={<ViewCompany />} />
          <Route exact path="/BannerShowCompany" element={<BannerShowCompany />} />
          


          
        </Routes>
      </BrowserRouter>
      <Footer />
    </DataProvider>
  );
}

