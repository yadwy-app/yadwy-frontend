# TODO

## Dashboard

### Store Performance Section

The Store Performance section has been removed from the dashboard. The component file still exists at:

- `src/app/[locale]/dashboard/_components/store-performance.tsx`

**What was removed:**

- A card component displaying store performance metrics
- Tabs for Sales, Visitors, and Products
- Placeholder content for charts (Sales chart, Visitors chart, Products chart)

**To re-implement:**

1. Add the StorePerformance component back to `home.tsx`
2. Implement actual chart components for:
   - Sales data visualization
   - Visitors/analytics data
   - Products performance metrics
3. Connect to backend API to fetch real performance data
4. Replace placeholder content with actual charts (consider using a charting library like Recharts, Chart.js, or similar)
