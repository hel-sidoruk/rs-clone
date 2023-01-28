import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, Challenges, Kata, KataTrain, UserProfile } from '../pages';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/kata" element={<Challenges />} />
      <Route path="/kata/:id" element={<Kata />} />
      <Route path="/kata/:id" element={<Kata />} />
      <Route path="/kata/:id/train" element={<KataTrain />} />
      <Route path="/users/:id" element={<UserProfile />} />
    </Routes>
  );
}
