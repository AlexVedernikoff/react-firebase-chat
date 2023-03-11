import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom"
import { PrivateRoutes, PublicRoutes } from "../rotes";

const AppRouter = () => {
    const [user, setUser] = useState(true)

    return user ?
        (
            <Routes>
                {PrivateRoutes.map(({ path, element }) => {
                    return < Route path={path} element={element} key={path} />
                })}
                <Route
                    path="*"
                    element={<Navigate to="/chat" replace />}
                />
            </Routes>

        ) :
        (
            <Routes>
                {PublicRoutes.map(({ path, element }) => {
                    return < Route path={path} element={element} key={path} />
                })}
                <Route
                    path="*"
                    element={<Navigate to="/login" replace />}
                />

            </Routes>
        )
}

export default AppRouter;