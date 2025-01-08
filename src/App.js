import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/users/Login';
import Register from './pages/users/Register';
import Profile from './pages/users/Profile/Profile';
import NotAdmin from './components/NotAdmin/NotAdmin';
import ProtectedRoute from './components/Navigation/ProtectedRoute';
import AddExpense from './pages/expenses/AddExpense';
import AddIncome from './pages/income/AddIncome';
import UserProfileExpList from './pages/users/Profile/UserProfileExpList';
import EditContent from './components/EditContent/EditContent';
import UpdateProfile from './pages/users/Profile/UpdateProfile';
import UserProfileIncList from './pages/users/Profile/UserProfileIncomeList';
import AdminRoute from './components/Navigation/AdminRoute';
import Dashboard from './pages/Dashboard/Dashbord';
import ExpensesList from './pages/expenses/ExpensesList';
import IncomeList from './pages/income/IncomeList';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/not-admin" element={<NotAdmin />} />
      <Route
        path="/dashboard"
        element={
          <AdminRoute>
            <Dashboard />
          </AdminRoute>
        }
      />
      <Route
        path="/add-income"
        element={
          <ProtectedRoute>
            <AddIncome />
          </ProtectedRoute>
        }
      />
      <Route
        path="/user-profile-expenses"
        element={
          <ProtectedRoute>
            <UserProfileExpList />
          </ProtectedRoute>
        }
      />
      <Route
        path="/user-profile-income"
        element={
          <ProtectedRoute>
            <UserProfileIncList />
          </ProtectedRoute>
        }
      />
      <Route
        path="/add-expense"
        element={
          <ProtectedRoute>
            <AddExpense />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/edit"
        element={
          <ProtectedRoute>
            <EditContent />
          </ProtectedRoute>
        }
      />
      <Route
        path="/update-profile"
        element={
          <ProtectedRoute>
            <UpdateProfile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/expenses"
        element={
          <ProtectedRoute>
            <ExpensesList />
          </ProtectedRoute>
        }
      />
      <Route
        path="/incomes"
        element={
          <ProtectedRoute>
            <IncomeList />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
