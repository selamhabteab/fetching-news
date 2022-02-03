import React from 'react'
import { Link } from 'react-router-dom'

const DashboardPage = () => (
    <section>
        <h1>What's the news today?</h1>
        <p>Your place to find news around the US!</p>
        <Link to="/posts" className="button">
        View News Posts
        </Link>
    </section>
)

export default DashboardPage