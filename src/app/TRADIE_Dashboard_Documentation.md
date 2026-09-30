# 📚 TRADIE Dashboard & Back Office - Complete Documentation

**Version:** 1.0  
**Platform:** Web/Desktop (1440×1024 optimized)  
**Type:** Commodity Trading Application - Back Office Prototype  
**Last Updated:** October 28, 2025

---

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Getting Started](#getting-started)
3. [Architecture](#architecture)
4. [User Guide](#user-guide)
5. [Feature Documentation](#feature-documentation)
6. [Component Reference](#component-reference)
7. [Development Guide](#development-guide)
8. [Design System](#design-system)
9. [API Reference](#api-reference)
10. [Troubleshooting](#troubleshooting)

---

## 🎯 Project Overview

### What is TRADIE?

TRADIE is a comprehensive **Commodity Trading Platform** designed to streamline the entire agricultural commodity trading lifecycle. The platform connects Producers, Traders, Agents, Buyers, Processors, and Logistics providers in a unified ecosystem.

### Key Features

- **Multi-Role Support**: 6 distinct user roles (Producer, Trader, Agent, Buyer, Processor, Logistics)
- **Transaction Management**: 5-stage workflow (Listing → Inspection → Sale → Billing → Settlement)
- **AI-Powered Insights**: Predictive analytics for demand, pricing, and crop health
- **Financial Integration**: Bill discounting, loans, settlements, insurance
- **Staff Management**: Manage up to 30 team members with granular permissions
- **KYC Compliance**: Complete document verification system
- **Multi-Language**: English + Regional languages (Hindi, Tamil, Telugu, Kannada)

### Target Users

1. **Farmers/Producers** - List and sell commodities
2. **Traders** - Buy and sell in bulk
3. **Agents** - Facilitate transactions
4. **Buyers** - Purchase commodities
5. **Processors** - Process raw materials
6. **Logistics** - Handle transportation

---

## 🚀 Getting Started

### System Requirements

- **Browser**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Screen Resolution**: Minimum 1024×768 (Optimized for 1440×1024)
- **Internet**: Stable broadband connection
- **JavaScript**: Enabled

### Quick Start Guide

#### Step 1: Access the Platform
```
Open your web browser and navigate to the TRADIE Dashboard URL
```

#### Step 2: Login
1. Choose login method:
   - **Email & Password**
   - **Mobile & Password**
   - **OTP (One-Time Password)**

2. Select your primary role from dropdown
3. Click "Login"

#### Step 3: Explore the Dashboard
- Use the **left sidebar** to navigate between sections
- Access **quick search** in the top bar
- Switch roles using the **Role dropdown** (top-right)
- Check **notifications** (bell icon)

---

## 🏗️ Architecture

### Technology Stack

**Frontend Framework:**
- React 18+ (with TypeScript)
- Tailwind CSS v4.0
- Shadcn/ui Component Library

**State Management:**
- React Context API (RoleContext)
- Local State (useState, useReducer)

**UI Components:**
- Radix UI Primitives
- Lucide React Icons
- Recharts (for data visualization)

**Styling:**
- Tailwind CSS utility classes
- CSS Variables for theming
- Gradient backgrounds

### File Structure Explained

```
TRADIE-Dashboard/
│
├── App.tsx                          # Main application entry point
├── contexts/
│   └── RoleContext.tsx             # Global role management
│
├── components/
│   ├── LoginScreen.tsx             # Authentication & role selection
│   ├── DashboardLayout.tsx         # Main layout wrapper
│   │
│   ├── screens/                    # Feature screens
│   │   ├── DashboardHome.tsx       # Dashboard overview
│   │   ├── KYCScreen.tsx           # Document verification
│   │   ├── TransactionCenter.tsx   # Transaction management
│   │   ├── FinancialOverview.tsx   # Financial operations
│   │   ├── AIInsightsCenter.tsx    # AI predictions
│   │   ├── UserStaffManagement.tsx # Team management
│   │   ├── ReportsAnalytics.tsx    # Reports & KPIs
│   │   └── SettingsScreen.tsx      # User preferences
│   │
│   └── ui/                         # Reusable UI components
│       ├── button.tsx
│       ├── card.tsx
│       ├── dialog.tsx
│       └── [40+ components]
│
└── styles/
    └── globals.css                 # Global styles & theme
```

---

## 📖 User Guide

### 1. Login & Role Gateway

#### Accessing the Platform

**Option A: Email Login**
1. Click "Email" tab
2. Enter your email address
3. Enter password
4. Select your role
5. Click "Login"

**Option B: Mobile Login**
1. Click "Mobile" tab
2. Enter mobile number (+91 format)
3. Enter password
4. Select your role
5. Click "Login"

**Option C: OTP Login** (Most Secure)
1. Click "OTP" tab
2. Enter mobile number
3. Click "Send OTP"
4. Enter 6-digit OTP received
5. Select your role
6. Click "Verify & Login"

#### Role Selection

Choose your primary role based on your business function:

| Role | Description | Primary Functions |
|------|-------------|-------------------|
| **Producer** | Farmers, growers | List commodities, manage inventory |
| **Trader** | Commodity traders | Buy & sell, manage deals |
| **Agent** | Commission agents | Facilitate transactions |
| **Buyer** | Bulk purchasers | Place orders, manage purchases |
| **Processor** | Processing units | Source raw materials |
| **Logistics** | Transport providers | Manage shipments |

### 2. Dashboard Overview

#### Dashboard Components

**Top Navigation Bar:**
- **Search**: Quick search for transactions, commodities, contacts
- **Language Selector**: Switch between languages
- **Role Switcher**: Change active role (if you have multiple roles)
- **Notifications**: View alerts and updates (badge shows count)
- **Profile Menu**: Access account settings, logout

**Left Sidebar Navigation:**
1. Dashboard - Overview and quick stats
2. KYC - Document verification
3. Transactions - Transaction management
4. Financial - Financial operations
5. Reports - Analytics and reports
6. AI Insights - Predictive analytics
7. User Management - Team management
8. Settings - Account preferences

**Main Content Area:**
- Dynamic content based on selected section
- Breadcrumb navigation at top
- Scrollable content area

**AI Assistant (Bottom-Right):**
- Click the gold chat bubble
- Future: AI-powered help and guidance

### 3. Dashboard Home

#### Key Metrics Cards

**Active Deals**
- Total number of ongoing transactions
- Percentage change from previous period
- Green = increase, Red = decrease

**Inventory**
- Total commodity quantity (Metric Tons)
- Current stock levels
- Inventory trend

**Revenue**
- Total revenue in INR
- Month-over-month growth
- Financial performance

**Partners**
- Number of active trading partners
- Network growth indicator

#### Wallet Overview

**Commit Coins**
- Platform currency earned through successful transactions
- Can be redeemed for discounts and services

**Balance**
- Available account balance
- Progress bar shows utilization

**Rewards Points**
- Loyalty points earned
- Use for premium features

**Financial Summary**
- Available credit limit
- Pending settlements

#### Recent Deals

View your latest transactions with:
- Transaction ID
- Commodity type
- Quantity
- Current stage (Listing/Inspection/Sale/Billing/Settlement)
- Buyer information
- Clickable for detailed view

#### Recent Settlements

Track payment settlements:
- Settlement ID
- Commodity
- Amount
- Date
- Status (Completed/Pending)

---

## 🔧 Feature Documentation

### Feature 1: KYC Verification

#### Purpose
Complete Know Your Customer (KYC) verification to unlock full platform features and build trust with trading partners.

#### Document Requirements

**Personal Documents:**
1. **Identity Proof** (Required)
   - Aadhaar Card
   - PAN Card
   - Passport
   - Voter ID

2. **Address Proof** (Required)
   - Utility Bill (< 3 months old)
   - Bank Statement
   - Rental Agreement

**Business Documents:**
3. **Business Registration** (For businesses)
   - GST Certificate
   - Trade License
   - Company Registration

4. **Bank Details** (Required)
   - Cancelled Cheque
   - Bank Statement

5. **Trade License** (For food commodities)
   - FSSAI License
   - Agricultural License

#### How to Complete KYC

**Step 1: Navigate to KYC Section**
- Click "KYC" in left sidebar

**Step 2: Upload Documents**
1. Click "Upload" button next to document type
2. Select file from computer (PDF, JPG, PNG)
3. Wait for upload confirmation
4. Repeat for all required documents

**Step 3: Fill Personal Information**
1. Click "Personal Info" tab
2. Enter all mandatory fields
3. Verify information accuracy
4. Click "Save Changes"

**Step 4: Fill Business Information**
1. Click "Business Info" tab
2. Enter business details
3. Upload business documents
4. Click "Save Changes"

**Step 5: Add Bank Details**
1. Click "Bank Details" tab
2. Enter account information
3. Upload cancelled cheque
4. Click "Save & Verify"

**Step 6: Wait for Verification**
- Documents are reviewed within 24-48 hours
- Check status in KYC dashboard
- Reupload if rejected with feedback

#### Document Status

| Status | Meaning | Action Required |
|--------|---------|-----------------|
| ✅ **Verified** | Document approved | None |
| ⏰ **Pending** | Under review | Wait for verification |
| ❌ **Rejected** | Document issue | Review feedback, reupload |
| ⚪ **Not Uploaded** | Missing document | Upload document |

---

### Feature 2: Transaction Center

#### 5-Stage Transaction Flow

```
Listing → Inspection → Sale → Billing → Settlement
```

#### Stage 1: Listing
**For Sellers:**
- List commodity for sale
- Specify quantity, quality grade
- Set price or accept bids
- Upload commodity photos
- Add location details

**Information Required:**
- Commodity type
- Quantity (MT/Kg)
- Quality grade
- Expected price
- Available date
- Location

#### Stage 2: Inspection
**Process:**
1. Buyer requests inspection
2. Schedule inspection date
3. Third-party or buyer inspects
4. Quality verification
5. Generate inspection report

**Inspection Checklist:**
- Visual quality check
- Moisture content
- Impurities percentage
- Grain size/uniformity
- Pest/disease presence
- Packaging condition

#### Stage 3: Sale
**Finalize Sale:**
1. Agree on final price
2. Confirm quantity
3. Set delivery terms
4. Sign digital contract
5. Create sale order

**Sale Confirmation Includes:**
- Final agreed price
- Quantity
- Quality specifications
- Delivery date
- Payment terms
- Penalties for default

#### Stage 4: Billing
**Generate Invoice:**
1. System auto-generates invoice
2. Add taxes (GST, etc.)
3. Include transport charges
4. Apply discounts if any
5. Send to buyer

**Invoice Components:**
- Base price × quantity
- Taxes (GST %)
- Transport charges
- Loading/unloading
- Insurance (if applicable)
- **Total amount**

#### Stage 5: Settlement
**Payment Processing:**
1. Buyer makes payment
2. Platform verifies payment
3. Deduct platform fees
4. Transfer to seller account
5. Mark transaction complete

**Settlement Options:**
- Immediate payment
- Advance + Balance
- Credit period (15/30/45 days)
- Bill discounting (early payment)

#### Transaction Tracking

**View All Transactions:**
- Filter by status (All/In Progress/Completed/Disputes)
- Search by ID, commodity, party name
- Sort by date, amount, stage

**Transaction Details:**
Click any transaction to view:
- Complete timeline
- Party information
- Documents attached
- Payment status
- Dispute history (if any)

#### Dispute Resolution

**When Disputes Occur:**
- Quality mismatch
- Quantity shortage
- Payment delays
- Damaged goods

**AI-Powered Resolution:**
1. System analyzes dispute
2. AI suggests resolution:
   - Price adjustment %
   - Partial refund
   - Third-party inspection
   - Mediation timeline
3. Apply suggestion or negotiate
4. Track resolution progress

**Dispute Actions:**
- Schedule re-inspection
- Initiate mediation
- Request platform support
- Apply AI suggestion
- Upload evidence

---

### Feature 3: Financial Overview

#### Bill Discounting

**What is Bill Discounting?**
Get early payment against your invoices at a small interest rate.

**How It Works:**
1. You have an invoice due in 30 days
2. Apply for bill discounting
3. Get 90-95% amount immediately
4. Pay interest on discounted amount
5. When buyer pays, remaining amount settled

**Eligibility:**
- Completed KYC
- Invoice from verified buyer
- Good transaction history
- Credit score check

**Apply for Bill Discounting:**
1. Navigate to Financial → Bill Discounting
2. Select invoice
3. View discount rate (8-12% annual)
4. Accept terms
5. Receive funds in 1-2 business days

#### Loan Eligibility

**Calculate Loan Amount:**
Based on:
- Annual turnover
- Transaction history
- Credit score
- Collateral (if any)

**Loan Types:**
1. **Working Capital Loan**
   - For daily operations
   - 6-12 months tenure
   - Interest: 10-15% p.a.

2. **Purchase Loan**
   - For bulk commodity purchase
   - 3-6 months tenure
   - Interest: 12-18% p.a.

3. **Equipment Loan**
   - For machinery, storage
   - 12-36 months tenure
   - Interest: 10-14% p.a.

#### Settlements

**View Settlements:**
- All completed payments
- Pending settlements
- Settlement schedule
- Payment proofs

**Settlement Tracking:**
- Transaction ID link
- Commodity details
- Amount paid/received
- Date and time
- Status

#### Advance Tracking

**For Traders:**
Track advances given to suppliers:

**Dashboard Shows:**
- Advance ID
- Party name
- Amount given
- Amount recovered
- Balance pending
- Recovery progress bar
- Status (Active/Overdue/Closed)

**Recovery Management:**
- Set recovery schedule
- Auto-deduct from sales
- Send payment reminders
- Mark as recovered

#### Financial Integrations

**Connect Your Bank:**
1. Click "Connect Bank"
2. Select your bank
3. Authenticate
4. Enable auto-settlements
5. View bank balance in dashboard

**NBFC Partners:**
- Quick loan approvals
- Competitive interest rates
- Minimal documentation
- Fast disbursal

**Insurance:**
- Crop insurance
- Trade credit insurance
- Transit insurance
- Price fluctuation protection

---

### Feature 4: AI Insights Center

#### Predictive Analytics

**What AI Insights Provide:**
- Future price predictions
- Demand forecasting
- Crop health alerts
- Market trends
- Optimal selling time

#### Price Trend Prediction

**Features:**
- Line chart: Actual vs Predicted prices
- 30/60/90 day forecasts
- Confidence intervals
- Historical accuracy

**How to Use:**
1. Select commodity
2. Choose timeframe
3. View prediction chart
4. Note key insights
5. Plan selling/buying strategy

**Factors Considered:**
- Historical price data
- Seasonal patterns
- Weather forecasts
- Market demand
- Government policies
- Import/export trends

#### Demand Analysis

**Regional Demand:**
- Bar charts by region
- Demand spikes identification
- Surplus/deficit alerts

**Demand Insights:**
- Which regions need your commodity
- Best time to supply
- Price premiums by region
- Logistics optimization

#### Crop Health Alerts

**AI Monitors:**
- Weather patterns
- Pest activity reports
- Disease outbreaks
- Soil conditions
- Satellite imagery

**Alerts You Receive:**
- Pest warnings
- Disease prevention tips
- Optimal harvesting time
- Quality preservation
- Storage recommendations

#### Seasonal Recommendations

**Best Time to Plant:**
- Based on weather forecasts
- Historical yield data
- Market demand timing

**Best Time to Sell:**
- Price peak predictions
- Demand windows
- Festival season demand

**Risk Alerts:**
- Weather risks
- Market oversupply
- Price crash warnings

#### Using Insights

**Filters:**
- **Commodity**: Select specific crop
- **Location**: Filter by region/state
- **Timeframe**: 7/30/90/365 days

**Export Insights:**
- Download as PDF report
- Share with team
- Set up alerts

---

### Feature 5: User & Staff Management

#### Adding Team Members

**Maximum Capacity:** 30 staff members

**Step-by-Step:**
1. Click "Add Staff Member" button
2. Fill in details:
   - Full name
   - Email address
   - Phone number
   - Control percentage (% of your authority)
3. Assign roles (can select multiple):
   - ☑️ Producer
   - ☑️ Trader
   - ☑️ Agent
   - ☑️ Buyer
   - ☑️ Processor
   - ☑️ Logistics
4. Set permissions:
   - Can Trade
   - Can View Financials
   - Can Manage Staff
   - Can Approve Transactions
5. Choose invitation method:
   - Email invitation
   - OTP to phone
6. Click "Send Invitation"

#### Control Percentage

**What is Control %?**
Defines what percentage of your authority the staff member has.

**Example:**
- You have 100% authority
- Give staff 25% control
- They can approve up to 25% of transaction values you can

**Total Control:**
- Must not exceed 100%
- System shows remaining control %
- Can redistribute anytime

#### Permission Types

**Can Trade:**
- Create listings
- Accept offers
- Negotiate prices
- Finalize deals

**Can View Financials:**
- See revenue data
- View profit margins
- Access bank details
- Check settlements

**Can Manage Staff:**
- Add new team members
- Edit staff details
- Remove staff
- Assign permissions

**Can Approve Transactions:**
- Approve large deals
- Sign contracts
- Authorize payments
- Cancel orders

#### Role-Based Permissions Matrix

Default permissions for each role:

| Permission | Producer | Trader | Agent | Buyer | Processor | Logistics |
|------------|----------|--------|-------|-------|-----------|-----------|
| View Dashboard | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Create Listings | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| Place Orders | ❌ | ✅ | ❌ | ✅ | ✅ | ❌ |
| View Financials | ❌ | ✅ | ✅ | ❌ | ❌ | ❌ |
| Manage Inventory | ✅ | ✅ | ❌ | ❌ | ✅ | ❌ |
| Approve Transactions | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ |
| Access Reports | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Manage Logistics | ❌ | ✅ | ❌ | ❌ | ❌ | ✅ |

#### Managing Staff

**Edit Staff:**
1. Click pencil icon next to staff member
2. Update details
3. Change permissions
4. Save changes

**Remove Staff:**
1. Click trash icon
2. Confirm removal
3. Staff loses access immediately

**View Staff Activity:**
- Transactions created
- Total value handled
- Last active time
- Performance metrics

---

### Feature 6: Reports & Analytics

#### Key Performance Indicators (KPIs)

**Sales Volume:**
- Total quantity sold (MT)
- Month-over-month change
- Trend indicator

**Average Price:**
- Average selling/buying price per kg
- Price trend
- Comparison with market rate

**Total Revenue:**
- Sum of all sales
- Growth percentage
- Monthly/quarterly breakdown

**Average Transaction Time:**
- Time from listing to settlement
- Efficiency indicator
- Improvement suggestions

#### Visual Analytics

**Sales Volume Trend:**
- Bar chart by month
- Identify peak seasons
- Plan inventory

**Revenue Trend:**
- Line chart over time
- Revenue growth visualization
- Forecast projection

**Commodity Distribution:**
- Pie chart by commodity type
- Portfolio diversification
- Focus areas

**Transaction Time Analysis:**
- Time spent at each stage
- Bottleneck identification
- Process optimization

#### Downloadable Reports

**Report Types:**

1. **KYC Compliance Report**
   - All verified documents
   - Compliance status
   - Pending verifications

2. **Sales Summary Report**
   - All sales transactions
   - Revenue breakdown
   - Commodity-wise analysis

3. **Ledger Report**
   - All financial entries
   - Debits and credits
   - Running balance

4. **Settlement Statement**
   - All payments received/made
   - Pending settlements
   - Payment proofs

5. **Inventory Report**
   - Current stock levels
   - Stock movement
   - Valuation

#### Filters

**By Role:**
View data specific to:
- Producer activities
- Trader transactions
- Agent commissions
- Buyer purchases

**By Region:**
- North India
- South India
- East India
- West India
- State-wise breakdown

**By Commodity:**
- Wheat
- Rice
- Cotton
- Pulses
- Others

**By Timeframe:**
- Last 7 days
- Last 30 days
- Last 90 days
- Last year
- Custom date range

#### Exporting Reports

**CSV Format:**
- For Excel analysis
- Data manipulation
- Custom charts

**PDF Format:**
- For sharing
- Professional reports
- Print-ready

---

### Feature 7: Settings

#### Profile Settings

**Update Personal Info:**
- Change name
- Update email
- Change phone number
- Update photo
- Edit bio
- Change company details
- Update location

#### Subscription Management

**Current Plan:**
- Plan name (e.g., Professional)
- Monthly cost
- Features included
- Renewal date

**Plan Features:**
- ✅ Unlimited transactions
- ✅ AI-powered insights
- ✅ Up to 30 staff members
- ✅ Priority support
- ✅ Advanced analytics
- ✅ Multi-role access
- ✅ Bill discounting
- ✅ Insurance integration

**Manage Subscription:**
- Upgrade to higher plan
- Downgrade plan
- Cancel subscription
- Change payment method
- View billing history

#### Notification Preferences

**Notification Channels:**

**Email Notifications:**
- Transaction updates
- Payment confirmations
- KYC status
- AI alerts

**SMS Notifications:**
- Critical alerts
- OTP codes
- Payment reminders
- Transaction approvals

**Push Notifications:**
- Real-time updates
- Price alerts
- New messages
- System alerts

**Notification Types:**

- ✅ **Transaction Updates**: Stage changes, completions
- ✅ **Price Alerts**: Your commodity price changes
- ❌ **Marketing Communications**: Promotional offers

**Customization:**
- Enable/disable per channel
- Enable/disable per type
- Set quiet hours
- Priority notifications only

#### Security Settings

**Change Password:**
1. Enter current password
2. Enter new password (min 8 characters)
3. Confirm new password
4. Click "Change Password"

**Two-Factor Authentication (2FA):**

**Enable 2FA:**
1. Toggle "Enable 2FA" switch
2. Choose method:
   - OTP via SMS
   - Authenticator app
   - Biometric (if supported)
3. Verify with test code
4. Save backup codes

**Benefits:**
- Extra security layer
- Protect against unauthorized access
- Required for high-value transactions

**Active Sessions:**
- View all logged-in devices
- Device name and location
- Last active time
- Revoke access to any device

#### Preferences

**Language:**
- English (Default)
- हिन���दी (Hindi)
- தமிழ் (Tamil)
- తెలుగు (Telugu)
- ಕನ್ನಡ (Kannada)

**Currency:**
- ₹ INR (Indian Rupee)
- $ USD (US Dollar)

**Timezone:**
- IST (Indian Standard Time)
- UTC (Coordinated Universal Time)

**Date Format:**
- DD-MM-YYYY (Indian)
- MM-DD-YYYY (US)
- YYYY-MM-DD (ISO)

---

## 💻 Component Reference

### Core Components

#### App.tsx
**Purpose:** Main application entry point  
**Responsibilities:**
- Authentication state management
- Route current role state
- Render LoginScreen or DashboardLayout

**State Variables:**
```javascript
isAuthenticated: boolean
currentRole: string
```

**Methods:**
```javascript
handleLogin(role: string)
handleLogout()
handleRoleChange(role: string)
```

#### DashboardLayout.tsx
**Purpose:** Main application layout wrapper  
**Features:**
- Top navigation bar
- Left sidebar
- Breadcrumb navigation
- Screen routing
- AI chat bubble

**Props:**
```typescript
currentRole: string
onRoleChange: (role: string) => void
onLogout: () => void
```

#### LoginScreen.tsx
**Purpose:** Authentication and role selection  
**Features:**
- Email/Mobile/OTP login tabs
- Role selection dropdown
- "Access Mobile View" button
- TRADIE branding

**Props:**
```typescript
onLogin: (role: string) => void
```

### Screen Components

#### DashboardHome.tsx
**Purpose:** Dashboard overview  
**Displays:**
- KPI cards (4 metrics)
- Wallet overview
- Recent deals
- Recent settlements

#### KYCScreen.tsx
**Purpose:** Document verification  
**Tabs:**
- Documents
- Personal Info
- Business Info
- Bank Details

#### TransactionCenter.tsx
**Purpose:** Transaction management  
**Features:**
- 5-stage workflow
- Transaction table
- Progress tracking
- Dispute resolution

#### FinancialOverview.tsx
**Purpose:** Financial operations  
**Sections:**
- Bill discounting
- Settlements
- Advance tracking
- Financial integrations

#### AIInsightsCenter.tsx
**Purpose:** Predictive analytics  
**Features:**
- Insight cards
- Price trend charts
- Demand analysis
- Filters

#### UserStaffManagement.tsx
**Purpose:** Team management  
**Features:**
- Add/edit staff
- Role assignment
- Permissions matrix
- Staff statistics

#### ReportsAnalytics.tsx
**Purpose:** Reports and KPIs  
**Features:**
- Visual KPIs
- Charts (bar, line, pie)
- Downloadable reports
- Filters

#### SettingsScreen.tsx
**Purpose:** User preferences  
**Tabs:**
- Profile
- Subscription
- Notifications
- Security
- Preferences

### UI Components (Shadcn)

All UI components are located in `/components/ui/` and include:

**Form Elements:**
- Button, Input, Textarea, Checkbox, Radio, Select, Switch

**Layout:**
- Card, Dialog, Sheet, Drawer, Popover, Tooltip

**Data Display:**
- Table, Badge, Avatar, Progress, Separator

**Navigation:**
- Breadcrumb, Tabs, Dropdown Menu, Navigation Menu

**Feedback:**
- Alert, Toast (Sonner), Skeleton

**Charts:**
- Chart components with Recharts integration

---

## 🎨 Design System

### Color Palette

**Primary Colors:**
```css
Background Gradient: #F7FAFC → #D9F2FF
Soft Gold Accent: #D4AF37
White: #FFFFFF
```

**Status Colors:**
```css
Success: #10B981 (Green)
Warning: #F59E0B (Orange)
Error: #EF4444 (Red)
Info: #3B82F6 (Blue)
```

**UI Colors:**
```css
Primary: #030213 (Dark)
Secondary: #F3F3F5 (Light Gray)
Border: rgba(0, 0, 0, 0.1)
Muted Text: #717182
```

### Typography

**Font Family:**
- System default font stack
- Sans-serif

**Font Sizes:**
```css
H1: 30px (text-3xl)
H2: 24px (text-2xl)
H3: 20px (text-xl)
H4: 18px (text-lg)
Body: 16px (text-base)
Small: 14px (text-sm)
Extra Small: 12px (text-xs)
```

**Font Weights:**
```css
Normal: 400
Medium: 500 (for headings, buttons, labels)
Bold: 600 (for emphasis)
```

### Spacing

**Padding/Margin Scale:**
```css
4px  (p-1, m-1)
8px  (p-2, m-2)
12px (p-3, m-3)
16px (p-4, m-4)
24px (p-6, m-6)
32px (p-8, m-8)
```

### Borders & Radius

**Border Radius:**
```css
Small: 4px (rounded-sm)
Medium: 6px (rounded-md)
Large: 8px (rounded-lg)
Full: 9999px (rounded-full)
```

**Border Width:**
```css
Default: 1px
Thick: 2px
```

### Shadows

**Elevation:**
```css
Small: shadow-sm
Medium: shadow-md
Large: shadow-lg
Extra Large: shadow-2xl
```

### Responsive Breakpoints

```css
sm: 640px   (Mobile)
md: 768px   (Tablet)
lg: 1024px  (Desktop)
xl: 1280px  (Large Desktop)
2xl: 1536px (Extra Large)
```

### Component Patterns

**Card Pattern:**
```jsx
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    {/* Content */}
  </CardContent>
</Card>
```

**Button Variants:**
- `default` - Primary action (gold background)
- `outline` - Secondary action
- `ghost` - Tertiary action
- `destructive` - Delete/cancel actions
- `link` - Text link style

**Badge Variants:**
- `default` - General use
- `secondary` - Less prominent
- `outline` - Bordered style
- `destructive` - Error/warning

---

## 🔌 API Reference

### Context API

#### RoleContext

**Provider:**
```typescript
<RoleProvider>
  {children}
</RoleProvider>
```

**Hook:**
```typescript
const { currentRole, setCurrentRole, availableRoles, userName } = useRole();
```

**Available Roles:**
```typescript
type UserRole = 'Producer' | 'Trader' | 'Agent' | 'Buyer' | 'Processor' | 'Logistics';
```

### Mock Data Structures

#### Transaction
```typescript
interface Transaction {
  id: string;
  commodity: string;
  quantity: string;
  stage: 'listing' | 'inspection' | 'sale' | 'billing' | 'settlement';
  buyer: string;
  seller: string;
  amount: string;
  date: string;
  status: 'completed' | 'in-progress' | 'pending' | 'dispute';
}
```

#### StaffMember
```typescript
interface StaffMember {
  id: string;
  name: string;
  email: string;
  phone: string;
  roles: string[];
  controlPercentage: number;
  status: 'active' | 'pending' | 'inactive';
  permissions: {
    canTrade: boolean;
    canViewFinancials: boolean;
    canManageStaff: boolean;
    canApproveTransactions: boolean;
  };
}
```

---

## 🛠️ Development Guide

### Setting Up Development Environment

**Prerequisites:**
```bash
Node.js 18+
npm or yarn
Git
```

**Installation:**
```bash
# Clone repository
git clone <repository-url>
cd tradie-dashboard

# Install dependencies
npm install

# Start development server
npm run dev
```

### Project Commands

```bash
# Development
npm run dev          # Start dev server

# Build
npm run build        # Production build
npm run preview      # Preview production build

# Linting
npm run lint         # Run ESLint
npm run lint:fix     # Fix linting errors

# Type Checking
npm run type-check   # TypeScript check
```

### Adding New Features

**Step 1: Create Component**
```typescript
// components/screens/NewFeature.tsx
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';

export const NewFeature: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl">New Feature</h2>
      <Card>
        <CardHeader>
          <CardTitle>Feature Title</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Content */}
        </CardContent>
      </Card>
    </div>
  );
};
```

**Step 2: Add Route**
```typescript
// DashboardLayout.tsx
import { NewFeature } from './screens/NewFeature';

// Add to menuItems
{ id: 'new-feature', label: 'New Feature', icon: IconName }

// Add to renderScreen switch
case 'new-feature':
  return <NewFeature />;
```

**Step 3: Test**
```bash
npm run dev
# Navigate to new feature in browser
```

### Code Standards

**Naming Conventions:**
- Components: PascalCase (e.g., `DashboardHome.tsx`)
- Hooks: camelCase with 'use' prefix (e.g., `useRole`)
- Constants: UPPER_SNAKE_CASE
- Variables: camelCase

**File Organization:**
```
components/
  screens/           # Page-level components
  ui/               # Reusable UI components
  shared/           # Shared utilities

contexts/           # React contexts
hooks/              # Custom hooks
utils/              # Helper functions
types/              # TypeScript types
```

**Import Order:**
1. React imports
2. Third-party libraries
3. UI components
4. Local components
5. Utils and types
6. Styles

### Testing

**Unit Tests:**
```bash
npm run test
```

**Component Testing:**
```typescript
import { render, screen } from '@testing-library/react';
import { DashboardHome } from './DashboardHome';

test('renders dashboard home', () => {
  render(<DashboardHome currentRole="Trader" />);
  expect(screen.getByText(/Welcome back/i)).toBeInTheDocument();
});
```

### Performance Optimization

**Best Practices:**
1. Use `React.memo` for expensive components
2. Implement virtual scrolling for long lists
3. Lazy load heavy components
4. Optimize images
5. Code splitting for routes

**Example:**
```typescript
const HeavyComponent = React.lazy(() => import('./HeavyComponent'));

<Suspense fallback={<Skeleton />}>
  <HeavyComponent />
</Suspense>
```

---

## ❓ Troubleshooting

### Common Issues

#### Issue: Cannot Login
**Symptoms:** Login button doesn't work  
**Solution:**
1. Check if email/mobile format is correct
2. Ensure role is selected
3. Clear browser cache
4. Try different browser

#### Issue: Dashboard Not Loading
**Symptoms:** Blank screen after login  
**Solution:**
1. Check browser console for errors
2. Verify JavaScript is enabled
3. Clear browser cache and cookies
4. Update browser to latest version

#### Issue: Charts Not Displaying
**Symptoms:** Empty chart areas  
**Solution:**
1. Check if data is available
2. Verify chart library is loaded
3. Check browser compatibility
4. Resize browser window

#### Issue: File Upload Fails
**Symptoms:** Documents won't upload  
**Solution:**
1. Check file size (< 5MB recommended)
2. Verify file format (PDF, JPG, PNG)
3. Check internet connection
4. Try smaller file size

#### Issue: Notifications Not Appearing
**Symptoms:** No notification alerts  
**Solution:**
1. Check notification settings
2. Enable browser notifications
3. Verify notification permissions
4. Check Do Not Disturb mode

### Error Messages

**"Session Expired"**
- Your login session has timed out
- Solution: Login again

**"Permission Denied"**
- You don't have access to this feature
- Solution: Contact admin or check role permissions

**"Network Error"**
- Connection to server failed
- Solution: Check internet connection, retry

**"Invalid File Format"**
- Uploaded file type not supported
- Solution: Convert to PDF, JPG, or PNG

### Browser Support

**Fully Supported:**
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

**Limited Support:**
- IE 11 (basic functionality only)
- Older browser versions (upgrade recommended)

### Getting Help

**In-App Support:**
1. Click AI Assistant (bottom-right)
2. Describe your issue
3. Get instant help

**Email Support:**
- support@tradie.com
- Response time: 24 hours

**Phone Support:**
- +91-1800-XXX-XXXX
- Mon-Sat: 9 AM - 6 PM IST

**Documentation:**
- Read this documentation
- Check FAQ section
- Watch video tutorials

---

## 📱 Mobile View

The platform is optimized for desktop (1440×1024) but responsive on mobile devices.

**Access Mobile View:**
1. Click "Access Mobile View" button on login screen
2. Or resize browser window to mobile size
3. Mobile-optimized interface loads automatically

**Mobile Features:**
- Collapsible sidebar
- Touch-friendly buttons
- Swipe gestures
- Responsive charts
- Optimized forms

---

## 🔐 Security & Privacy

### Data Protection

**Encryption:**
- All data transmitted via HTTPS
- Passwords hashed with bcrypt
- Sensitive data encrypted at rest

**Privacy:**
- Your data is never shared without consent
- GDPR compliant
- Data retention policies
- Right to deletion

### Best Practices

**For Users:**
1. Use strong passwords (8+ characters, mix of letters, numbers, symbols)
2. Enable 2FA
3. Don't share login credentials
4. Logout from shared devices
5. Review active sessions regularly
6. Be cautious with phishing emails

**For Administrators:**
1. Limit staff permissions to minimum required
2. Regular permission audits
3. Monitor unusual activity
4. Keep contact information updated
5. Review staff access logs

---

## 📚 Glossary

**Commodity:** Agricultural products traded on the platform (wheat, rice, etc.)

**MT:** Metric Ton (1000 kg)

**KYC:** Know Your Customer - identity verification process

**Bill Discounting:** Early payment against invoices at a discount

**Settlement:** Final payment completion of a transaction

**NBFC:** Non-Banking Financial Company

**FSSAI:** Food Safety and Standards Authority of India

**GST:** Goods and Services Tax

**OTP:** One-Time Password for authentication

**2FA:** Two-Factor Authentication for enhanced security

**AI:** Artificial Intelligence for predictive analytics

**KPI:** Key Performance Indicator - metrics for business performance

**Commit Coins:** Platform reward currency

---

## 📞 Contact & Support

**Platform Support:**
- Email: support@tradie.com
- Phone: +91-1800-XXX-XXXX
- Hours: Mon-Sat, 9 AM - 6 PM IST

**Technical Issues:**
- Email: tech@tradie.com
- Response: Within 24 hours

**Business Inquiries:**
- Email: business@tradie.com
- Phone: +91-1800-YYY-YYYY

**Social Media:**
- Twitter: @TRADIEPlatform
- LinkedIn: TRADIE - Commodity Trading
- Facebook: TRADIE India

---

## 📄 License & Legal

**Copyright:** © 2025 TRADIE Platform. All rights reserved.

**Terms of Service:** Please read our Terms of Service before using the platform.

**Privacy Policy:** Your privacy is important. Read our Privacy Policy.

**Compliance:**
- RBI Guidelines compliant
- SEBI regulations followed
- Data Protection Act compliant

---

## 🚀 Roadmap & Future Features

**Coming Soon:**
- Mobile app (iOS & Android)
- WhatsApp integration
- Blockchain-based contracts
- Weather API integration
- Marketplace expansion
- International trading support
- More AI features
- Voice commands
- Offline mode
- Advanced reporting

---

## 📖 Version History

**v1.0 (October 2025)**
- Initial release
- 8 core features
- Multi-role support
- AI insights
- Full KYC system
- Transaction management
- Financial integrations
- Staff management
- Reports & analytics
- Settings & preferences

---

## 🙏 Acknowledgments

**Built With:**
- React & TypeScript
- Tailwind CSS
- Shadcn/ui
- Radix UI
- Recharts
- Lucide Icons

**Special Thanks:**
- Development Team
- Design Team
- Testing Team
- Early Adopters
- Community Contributors

---

**End of Documentation**

*For latest updates and detailed guides, visit our documentation portal at docs.tradie.com*

*Need help? Contact support@tradie.com*

*Happy Trading! 🌾📈*
