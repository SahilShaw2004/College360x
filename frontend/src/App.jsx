import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home.jsx";
import Start from "./pages/Start.jsx";
import Clubs from "./pages/Clubs.jsx";
import Events from "./pages/Events.jsx";
import EventForm from "./pages/EventForm.jsx";
import FacultyLogin from "./pages/FacultyLogin.jsx";
import FacultySignup from "./pages/FacultySignup.jsx";
import Gallery from "./pages/Gallery.jsx";
import Leaderboard from "./pages/leaderboard.jsx";
import LostandFound from "./pages/LostandFound.jsx";
import MemePage from "./pages/MemePage.jsx";
import Ragging from "./pages/Ragging.jsx";
import { RaggingHistoryPage } from "./pages/Ragging.jsx";
import StudentLogin from "./pages/StudentLogin.jsx";
import StudentSignup from "./pages/StudentSignup.jsx";
import StudyMaterial from "./pages/StudyMaterial.jsx";
import StudyPartner from "./pages/StudyPartner.jsx";
import ProtectedRoute from "./ProtectedRoute";
import { AuthProvider, useAuth } from "./context/AuthContext";
import AptosWalletProvider from "./components/AptosWalletProvider";

function AppRoutes() {
  const { isLoggedIn, isLoading } = useAuth();

  // Show loading screen while checking authentication
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <Routes>
      {/* Landing page for not logged in users */}
      <Route path="/start" element={isLoggedIn ? <Navigate to="/" /> : <Start />} />
      {/* Auth pages */}
      <Route path="/student-login" element={<StudentLogin />} />
      <Route path="/student-signup" element={<StudentSignup />} />
      <Route path="/faculty-login" element={<FacultyLogin />} />
      <Route path="/faculty-signup" element={<FacultySignup />} />
      {/* Protected routes */}
      <Route path="/" element={
        <ProtectedRoute>
          <MainLayout><Home /></MainLayout>
        </ProtectedRoute>
      } />
      <Route path="/clubs" element={
        <ProtectedRoute>
          <MainLayout><Clubs /></MainLayout>
        </ProtectedRoute>
      } />
      <Route path="/clubs/join" element={
        <ProtectedRoute>
          <MainLayout><Clubs /></MainLayout>
        </ProtectedRoute>
      } />
      <Route path="/clubs/events" element={
        <ProtectedRoute>
          <MainLayout><Clubs /></MainLayout>
        </ProtectedRoute>
      } />
      <Route path="/events" element={
        <ProtectedRoute>
          <MainLayout><Events /></MainLayout>
        </ProtectedRoute>
      } />
      <Route path="/EventForm" element={
        <ProtectedRoute>
          <MainLayout><EventForm /></MainLayout>
        </ProtectedRoute>
      } />
      <Route path="/events/registrations" element={
        <ProtectedRoute>
          <MainLayout><Events /></MainLayout>
        </ProtectedRoute>
      } />
      <Route path="/gallery" element={
        <ProtectedRoute>
          <MainLayout><Gallery /></MainLayout>
        </ProtectedRoute>
      } />
      <Route path="/leaderboard" element={
        <ProtectedRoute>
          <MainLayout><Leaderboard /></MainLayout>
        </ProtectedRoute>
      } />
      <Route path="/lostandfound" element={
        <ProtectedRoute>
          <MainLayout><LostandFound /></MainLayout>
        </ProtectedRoute>
      } />
      <Route path="/memepage" element={
        <ProtectedRoute>
          <MainLayout><MemePage /></MainLayout>
        </ProtectedRoute>
      } />
      <Route path="/ragging" element={
        <ProtectedRoute>
          <MainLayout><Ragging /></MainLayout>
        </ProtectedRoute>
      } />
      <Route path="/ragging/history" element={
        <ProtectedRoute>
          <MainLayout><RaggingHistoryPage /></MainLayout>
        </ProtectedRoute>
      } />
      <Route path="/studymaterial" element={
        <ProtectedRoute>
          <MainLayout><StudyMaterial /></MainLayout>
        </ProtectedRoute>
      } />
      <Route path="/studypartner" element={
        <ProtectedRoute>
          <MainLayout><StudyPartner /></MainLayout>
        </ProtectedRoute>
      } />
      <Route path="/studypartner/groups" element={
        <ProtectedRoute>
          <MainLayout><StudyPartner /></MainLayout>
        </ProtectedRoute>
      } />
      <Route path="/studypartner/join" element={
        <ProtectedRoute>
          <MainLayout><StudyPartner /></MainLayout>
        </ProtectedRoute>
      } />
    </Routes>
  );
}

function App() {
  return (
    <AuthProvider>
      <AptosWalletProvider>
        <AppRoutes />
      </AptosWalletProvider>
    </AuthProvider>
  );
}

export default App;