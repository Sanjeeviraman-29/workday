import "./VendorDashboard.css";

function VendorDashboard() {
  const metrics = [
    {
      title: "Active Contractors",
      value: "128",
      change: "+12%",
      description: "vs last week",
      type: "positive",
    },
    {
      title: "Active Projects",
      value: "24",
      change: "+8%",
      description: "vs last week",
      type: "positive",
    },
    {
      title: "Pending Timesheets",
      value: "36",
      change: "+5",
      description: "since last week",
      type: "warning",
    },
    {
      title: "Outstanding Payments",
      value: "$128,450",
      change: "-4%",
      description: "vs last week",
      type: "positive",
    },
  ];

  const activities = [
    {
      title: "Timesheet submitted by John D.",
      description: "Project Alpha",
      time: "2h ago",
      type: "blue",
    },
    {
      title: 'Milestone "Design Phase" completed',
      description: "Project Beta",
      time: "5h ago",
      type: "green",
    },
    {
      title: "Invoice INV-2025-089 requires review",
      description: "Project Gamma",
      time: "1d ago",
      type: "orange",
    },
  ];

  const projects = [
    {
      name: "Project Alpha",
      amount: "$68,450",
      percentage: "100%",
    },
    {
      name: "Project Beta",
      amount: "$54,230",
      percentage: "79%",
    },
    {
      name: "Project Gamma",
      amount: "$40,120",
      percentage: "59%",
    },
    {
      name: "Project Delta",
      amount: "$28,880",
      percentage: "43%",
    },
  ];

  return (
    <div className="vendor-dashboard">

      {/* Page Header */}

      <div className="dashboard-page-header">

        <div>
          <h1>Dashboard</h1>
          <p>
            Overview of your workforce and billing
          </p>
        </div>

        <button className="period-button">
          This Month
          <span>⌄</span>
        </button>

      </div>


      {/* Key Metrics */}

      <section className="metrics-grid">

        {metrics.map((metric) => (
          <div
            className="metric-card"
            key={metric.title}
          >
            <div className="metric-header">
              <span className="metric-title">
                {metric.title}
              </span>

              <span className="metric-indicator">
                {metric.type === "warning" ? "!" : "•"}
              </span>
            </div>

            <div className="metric-value">
              {metric.value}
            </div>

            <div
              className={`metric-change ${metric.type}`}
            >
              {metric.change}
              <span>{metric.description}</span>
            </div>
          </div>
        ))}

      </section>


      {/* Main Dashboard Sections */}

      <section className="dashboard-sections">

        {/* Billing */}

        <div className="dashboard-card billing-card">

          <div className="card-header">
            <div>
              <h2>Billing & Invoices</h2>
              <p>Current billing activity</p>
            </div>

            <button className="text-button">
              View all
            </button>
          </div>

          <div className="billing-grid">

            <div className="billing-item">
              <span>Billed Amount</span>
              <strong>$245,680</strong>

              <small className="positive-text">
                +15% vs last month
              </small>
            </div>

            <div className="billing-item">
              <span>Invoices Generated</span>
              <strong>18</strong>

              <small className="positive-text">
                +3 vs last month
              </small>
            </div>

            <div className="billing-item">
              <span>Awaiting Approval</span>
              <strong>7</strong>

              <small className="warning-text">
                $102,300 total value
              </small>
            </div>

            <div className="billing-item">
              <span>Overdue</span>
              <strong>2</strong>

              <small className="danger-text">
                $26,150 total value
              </small>
            </div>

          </div>

        </div>


        {/* Milestones */}

        <div className="dashboard-card">

          <div className="card-header">
            <div>
              <h2>Milestone Status</h2>
              <p>Current project milestones</p>
            </div>

            <button className="text-button">
              View all
            </button>
          </div>

          <div className="status-list">

            <div className="status-row">
              <div className="status-label">
                <span className="status-dot blue"></span>
                Active Milestones
              </div>

              <strong>12</strong>
            </div>

            <div className="status-row">
              <div className="status-label">
                <span className="status-dot green"></span>
                Completed Milestones
              </div>

              <strong>28</strong>
            </div>

            <div className="status-row">
              <div className="status-label">
                <span className="status-dot orange"></span>
                Effort Variance
              </div>

              <strong className="warning-number">
                4
              </strong>
            </div>

            <div className="status-row">
              <div className="status-label">
                <span className="status-dot red"></span>
                Delayed Milestones
              </div>

              <strong className="danger-number">
                3
              </strong>
            </div>

          </div>

        </div>


        {/* Invoice Attention */}

        <div className="dashboard-card">

          <div className="card-header">
            <div>
              <h2>Invoice Attention</h2>
              <p>Items requiring action</p>
            </div>

            <button className="text-button">
              View all
            </button>
          </div>

          <div className="invoice-attention">

            <div className="attention-block review">

              <div className="attention-heading">
                <span className="attention-icon">
                  !
                </span>

                <span>Requires Review</span>
              </div>

              <strong>5</strong>

              <small>
                $85,500 total value
              </small>

            </div>

            <div className="attention-block approved">

              <div className="attention-heading">
                <span className="attention-icon">
                  ✓
                </span>

                <span>Auto-Approved</span>
              </div>

              <strong>9</strong>

              <small>
                $160,180 total value
              </small>

            </div>

          </div>

        </div>

      </section>


      {/* Bottom Sections */}

      <section className="bottom-grid">

        {/* Recent Activity */}

        <div className="dashboard-card">

          <div className="card-header">
            <div>
              <h2>Recent Activity</h2>
              <p>Latest workforce and billing events</p>
            </div>

            <button className="text-button">
              View all
            </button>
          </div>

          <div className="activity-list">

            {activities.map((activity) => (
              <div
                className="activity-item"
                key={activity.title}
              >
                <span
                  className={`activity-dot ${activity.type}`}
                ></span>

                <div className="activity-content">
                  <strong>{activity.title}</strong>
                  <span>{activity.description}</span>
                </div>

                <time>{activity.time}</time>
              </div>
            ))}

          </div>

        </div>


        {/* Project Billing */}

        <div className="dashboard-card">

          <div className="card-header">
            <div>
              <h2>Top Projects by Billing</h2>
              <p>Current month</p>
            </div>

            <button className="text-button">
              View all
            </button>
          </div>

          <div className="project-list">

            {projects.map((project) => (
              <div
                className="project-item"
                key={project.name}
              >
                <div className="project-info">
                  <span>{project.name}</span>
                  <strong>{project.amount}</strong>
                </div>

                <div className="project-bar">
                  <div
                    className="project-bar-fill"
                    style={{
                      width: project.percentage,
                    }}
                  ></div>
                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

    </div>
  );
}

export default VendorDashboard;