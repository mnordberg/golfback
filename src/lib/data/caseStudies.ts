export type CaseStudy = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  stats?: { label: string; value: string }[];
  content?: string;
  body?: string; // HTML string for rich rendering
  quote?: { text: string; author: string; role?: string };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "painted-hills-golf-club",
    title: "Painted Hills Golf Club",
    excerpt:
      "How Painted Hills dramatically increased online revenue and grew their customer database by switching to GolfBack's direct booking platform.",
    date: "February 11, 2025",
    stats: [
      { label: "Green Fee Revenue", value: "+42%" },
      { label: "Online Revenue", value: "+82.2%" },
      { label: "Database Growth", value: "+107.2%" },
    ],
    body: `
      <h2>The Challenge</h2>
      <p>Painted Hills Golf Club was over-reliant on third-party tee time marketplaces, ceding revenue, customer data, and pricing control to outside platforms. Direct bookings were a fraction of total volume and the course lacked a meaningful customer database to drive repeat business.</p>

      <h2>The GolfBack Solution</h2>
      <p>The course implemented GolfBack's full suite: a direct booking engine, GRO dynamic pricing, and automated marketing campaigns. The transition shifted the revenue mix decisively toward direct bookings while giving the team real-time pricing control.</p>

      <h2>The Results (2023 vs. 2024)</h2>
      <table>
        <thead>
          <tr><th>Metric</th><th>2023</th><th>2024</th><th>Change</th></tr>
        </thead>
        <tbody>
          <tr><td>Total Green Fee Revenue</td><td>$820,741</td><td>$1,165,233</td><td>+42.0%</td></tr>
          <tr><td>Online Revenue</td><td>$521,845</td><td>$950,797</td><td>+82.2%</td></tr>
          <tr><td>Customer Database</td><td>4,473 contacts</td><td>9,266 contacts</td><td>+107.2%</td></tr>
        </tbody>
      </table>

      <h2>Key Drivers</h2>
      <ul>
        <li><strong>Direct booking engine:</strong> A seamless, course-owned booking flow replaced third-party redirects, improving conversion and eliminating commission leakage.</li>
        <li><strong>Dynamic pricing:</strong> GRO's demand-responsive rates captured additional revenue during peak windows and maintained occupancy during off-peak periods.</li>
        <li><strong>Database-driven marketing:</strong> The more-than-doubled contact list enabled personalized email campaigns, automated follow-ups, and targeted promotions that improved repeat visit rates and lifetime customer value.</li>
      </ul>

      <h2>The Bottom Line</h2>
      <p>In a single year, Painted Hills added $344,492 in green fee revenue and $428,952 in online revenue — while building a customer asset (their database) that compounds in value over time.</p>
    `,
    quote: {
      text: "Switching to GolfBack was one of the easiest things to do. We saw revenue increase immediately with Average Per Round increases of over $7 YoY while playing more total rounds.",
      author: "Bo Lehew",
      role: "General Manager, Golf Club of Texas",
    },
  },
  {
    slug: "missouri-bluffs-golf-club",
    title: "Missouri Bluffs Golf Club",
    excerpt:
      "Three years of consistent growth: how Missouri Bluffs used GolfBack's dynamic pricing and marketing automation to add over $544K in green fee revenue.",
    date: "February 11, 2025",
    stats: [
      { label: "Green Fee Revenue", value: "+36.3%" },
      { label: "Online Revenue", value: "+44.7%" },
      { label: "Database Growth", value: "+47.2%" },
    ],
    body: `
      <h2>Three Years of Compounding Growth</h2>
      <p>Missouri Bluffs Golf Club has been a GolfBack partner since 2022. Their results show what sustained, disciplined use of direct booking technology looks like over a multi-year horizon — steady, compounding gains in revenue, online share, and customer database scale.</p>

      <h2>Revenue Results (2022–2024)</h2>
      <table>
        <thead>
          <tr><th>Metric</th><th>2022</th><th>2023</th><th>2024</th><th>3-Year Change</th></tr>
        </thead>
        <tbody>
          <tr><td>Total Green Fee Revenue</td><td>$1,501,855</td><td>$1,849,867</td><td>$2,046,845</td><td>+36.3%</td></tr>
          <tr><td>Online Revenue</td><td>$930,647</td><td>$1,172,213</td><td>$1,346,921</td><td>+44.7%</td></tr>
          <tr><td>Online as % of Total</td><td>61.9%</td><td>63.4%</td><td>65.8%</td><td>+3.9 pts</td></tr>
          <tr><td>Customer Contacts</td><td>29,654</td><td>36,741</td><td>43,668</td><td>+47.2%</td></tr>
        </tbody>
      </table>

      <h2>What Drove the Growth</h2>
      <ul>
        <li><strong>Dynamic pricing:</strong> Demand-responsive rates maximized revenue per available round across the day-part mix.</li>
        <li><strong>Direct booking shift:</strong> Online revenue grew from 61.9% to 65.8% of total green fees, reducing third-party dependency year over year.</li>
        <li><strong>Database expansion:</strong> Adding over 14,000 contacts over three years created a growing, owned marketing channel that drives repeat visits without paid acquisition costs.</li>
        <li><strong>Marketing automation:</strong> Targeted campaigns and automated follow-ups converted database contacts into booked rounds.</li>
      </ul>

      <h2>The Bottom Line</h2>
      <p>Over three years, Missouri Bluffs added $544,990 in total green fee revenue and $416,274 in online revenue. Their online revenue share grew each year — a sign that the direct booking flywheel is accelerating, not plateauing.</p>
    `,
  },
  {
    slug: "dynamic-pricing-3698",
    title: "Dynamic Pricing: $3,698 in 3 Days",
    excerpt:
      "How Missouri Bluffs Golf Club generated $3,698 in additional revenue over a single weekend using GolfBack's dynamic pricing and Daily Steals tools.",
    date: "September 29, 2021",
    stats: [
      { label: "Extra Revenue", value: "$3,698" },
      { label: "Time Period", value: "3 Days" },
      { label: "Projected Annual Lift", value: "$192K" },
    ],
    body: `
      <h2>The Scenario</h2>
      <p>Over three days in September 2021 — September 17–19, from 7:00 AM to 12:29 PM — Missouri Bluffs Golf Club ran GolfBack's dynamic pricing and Daily Steals features during their peak weekend morning day-part. The analysis compared actual results against what the course would have earned at their standard phone rack rate of $74.88.</p>

      <h2>The Numbers</h2>
      <table>
        <thead>
          <tr><th>Metric</th><th>Value</th></tr>
        </thead>
        <tbody>
          <tr><td>Phone Rack Rate</td><td>$74.88</td></tr>
          <tr><td>Total Online Rounds</td><td>196</td></tr>
          <tr><td>Total Revenue Generated</td><td>$15,754</td></tr>
          <tr><td>Revenue from Dynamic Pricing Lift</td><td>$1,461</td></tr>
          <tr><td>Revenue from Daily Steals</td><td>$2,237</td></tr>
          <tr><td>Combined Additional Revenue</td><td>$3,698</td></tr>
          <tr><td>Projected Annual Revenue Increase</td><td>$192,296</td></tr>
        </tbody>
      </table>

      <h2>How It Worked</h2>
      <p>Of the 196 rounds booked online, 161 were sold at a dynamic rate averaging $83.96 — $9.08 above rack rate — generating an additional $1,461 compared to flat-rate pricing. The remaining 35 rounds were Daily Steals, which historically were bartered away to a third-party vendor at zero course revenue. Under GolfBack, those same slots generated $2,237 in direct revenue at an average of $63.91 per round.</p>

      <h2>The Key Insight</h2>
      <p>The most striking result isn't the dynamic pricing lift — it's the Daily Steals revenue. Those 35 rounds had previously generated <em>nothing</em> for the course under a barter arrangement. GolfBack converted zero-revenue inventory into $2,237 in real, paid-to-course income over a single weekend, while the course kept 100% of every dollar.</p>

      <h2>Scale It Out</h2>
      <p>Extrapolated across a full season, the combined impact projects to over $192,000 in additional annual revenue — from a single day-part, at a single course.</p>
    `,
  },
  {
    slug: "daily-steals-smart-way",
    title: "Daily Steals: The Smart Way to Attract Golfers",
    excerpt:
      "How GolfBack's Daily Steals feature fills low-demand tee times with paying golfers — while the course keeps 100% of the revenue and owns every customer.",
    date: "February 20, 2025",
    stats: [
      { label: "Hilton Head Rounds (2024)", value: "2,461" },
      { label: "Hilton Head Revenue", value: "$165,965" },
      { label: "Orlando Revenue", value: "$112,573" },
    ],
    body: `
      <h2>What Is a Daily Steal?</h2>
      <p>A Daily Steal is an exclusive, time-sensitive tee time offer posted directly on a golf course's own website. Golfers book at a promotional rate — and the course keeps 100% of the revenue, collects every customer's contact information, and maintains complete control over pricing and availability.</p>
      <p>It is the direct-booking alternative to Hot Deals on GolfNow, with one critical difference: the revenue stays at the course.</p>

      <h2>The Four Principles</h2>
      <p>Daily Steals are built around GolfBack's foundational commitments:</p>
      <ul>
        <li>The golf course owns its lowest market rate</li>
        <li>The course retains 100% of green and cart fee revenue</li>
        <li>The course collects and owns all customer data</li>
        <li>The course communicates directly with every golfer</li>
      </ul>

      <h2>Daily Steals vs. GolfNow Hot Deals</h2>
      <table>
        <thead>
          <tr><th>Factor</th><th>Daily Steals</th><th>GolfNow Hot Deals</th></tr>
        </thead>
        <tbody>
          <tr><td>Revenue destination</td><td>100% to the course</td><td>Split with GolfNow</td></tr>
          <tr><td>Booking location</td><td>Course's own website</td><td>GolfNow platform</td></tr>
          <tr><td>Customer data</td><td>Owned by the course</td><td>Owned by GolfNow</td></tr>
          <tr><td>Pricing control</td><td>Full course control</td><td>Barter / GolfNow rates</td></tr>
          <tr><td>Direct relationship</td><td>Yes</td><td>No</td></tr>
        </tbody>
      </table>

      <h2>Real Results (2024)</h2>
      <p><strong>Hilton Head Island Golf Course</strong></p>
      <ul>
        <li>2,461 rounds booked via Daily Steals</li>
        <li>$165,965 in total revenue</li>
        <li>$67.44 average per round</li>
      </ul>

      <p><strong>Orlando, FL Golf Course</strong></p>
      <ul>
        <li>2,175 rounds booked via Daily Steals</li>
        <li>$112,573 in total revenue</li>
        <li>$51.76 average per round</li>
      </ul>

      <h2>Best Practices</h2>
      <p>Courses that see the best results post at least one Daily Steal per day, with two per day performing especially well for low-demand time slots. Promotion through automated email campaigns, social media, and website banners amplifies reach without additional labor.</p>
    `,
  },
  {
    slug: "windsor-parke-golf-club",
    title: "Windsor Parke Golf Club",
    excerpt:
      "How Windsor Parke went from GolfNow-dependent to a direct booking engine — growing online rounds 441% and online revenue 382% in a single season.",
    date: "May 12, 2021",
    stats: [
      { label: "Online Rounds", value: "+441%" },
      { label: "Online Revenue", value: "+382%" },
      { label: "Green Fee Revenue", value: "+$148,910" },
    ],
    body: `
      <h2>The Course</h2>
      <p>Windsor Parke Golf Course is an 18-hole public facility in Jacksonville, Florida — competing in one of the most saturated markets in the country, within 10 miles of TPC Sawgrass. Visibility, direct booking conversion, and pricing control are not optional; they are existential.</p>

      <h2>The Previous Setup</h2>
      <p>Through April 2020, Windsor Parke operated on a fully outsourced tech stack:</p>
      <ul>
        <li>GolfNow for tee time distribution</li>
        <li>EZLinks booking engine</li>
        <li>EZLinks website</li>
      </ul>
      <p>Third parties controlled the course's online presence, customer relationships, and pricing. The course had no direct line to its own golfers.</p>

      <h2>The Results (Oct 2019–Apr 2020 vs. Oct 2020–Apr 2021)</h2>
      <table>
        <thead>
          <tr><th>Metric</th><th>Pre-GolfBack</th><th>Post-GolfBack</th><th>Change</th></tr>
        </thead>
        <tbody>
          <tr><td>Total Rounds</td><td>22,753</td><td>26,496</td><td>+16.4%</td></tr>
          <tr><td>Green &amp; Cart Revenue</td><td>$672,334</td><td>$821,244</td><td>+22%</td></tr>
          <tr><td>Online Rounds</td><td>1,843</td><td>9,975</td><td>+441%</td></tr>
          <tr><td>Online Revenue</td><td>$81,450</td><td>$392,676</td><td>+382%</td></tr>
          <tr><td>Daily Steals Rounds</td><td>—</td><td>1,946</td><td>—</td></tr>
          <tr><td>Daily Steals Revenue</td><td>—</td><td>$61,854</td><td>—</td></tr>
          <tr><td>Website Users</td><td>14,247</td><td>25,056</td><td>+75%</td></tr>
          <tr><td>Booking Engine Clicks</td><td>8,248</td><td>22,048</td><td>+167%</td></tr>
          <tr><td>Goal Conversion Rate</td><td>Baseline</td><td>+44.46%</td><td>—</td></tr>
          <tr><td>Contact List Growth</td><td>—</td><td>+14.36%</td><td>—</td></tr>
        </tbody>
      </table>

      <h2>The Key Shift</h2>
      <p>The 441% growth in online rounds wasn't organic search luck — it was the direct result of owning the booking infrastructure. When the course controls the website and the booking engine, every marketing dollar and every organic search visit converts into a direct booking and a captured customer record. With GolfNow, those same visits converted into GolfNow's database, not Windsor Parke's.</p>

      <h2>The Bottom Line</h2>
      <p>Windsor Parke added $148,910 in green fee revenue and $311,226 in online revenue in a single season after replacing third-party platforms with GolfBack. The 1,946 Daily Steals rounds generated $61,854 that would have previously gone to a barter arrangement — or not been booked at all.</p>
    `,
  },
  {
    slug: "millions-leaving-philly",
    title: "Millions Leaving the Philly Market",
    excerpt:
      "An analysis of how golf courses in the Philadelphia market are collectively losing millions in revenue to third-party aggregators — and what the numbers actually look like.",
    date: "June 1, 2022",
    stats: [
      { label: "Courses Analyzed", value: "50" },
      { label: "Daily Barter Value", value: "$15,545" },
      { label: "Rounds on One Date", value: "320" },
    ],
    body: `
      <h2>The Analysis</h2>
      <p>On May 21, 2022, GolfBack analyzed Hot Deal activity across 50 golf courses in the Philadelphia market. The data reveals the scale of revenue that courses collectively surrender to third-party platforms every single day.</p>

      <h2>The Numbers (Single Day: May 21, 2022)</h2>
      <table>
        <thead>
          <tr><th>Metric</th><th>Value</th></tr>
        </thead>
        <tbody>
          <tr><td>Courses listing Hot Deals</td><td>50</td></tr>
          <tr><td>Total rounds traded</td><td>320</td></tr>
          <tr><td>Daily barter value (to GolfNow)</td><td>$15,545</td></tr>
          <tr><td>Virtual competitor courses created</td><td>3.2</td></tr>
        </tbody>
      </table>

      <h2>The Virtual Competitor Problem</h2>
      <p>The 320 discounted rounds traded on a single day represent the equivalent capacity of 3.2 new 18-hole golf courses operating in the Philadelphia market — except these virtual courses don't pay staff, maintain turf, or invest in the market. They extract revenue from the courses that do.</p>
      <p>At $15,545 per day in barter value, the Philadelphia market alone is on track to generate millions annually for GolfNow — revenue that was earned by real golf courses but captured by a platform.</p>

      <h2>The Five Non-Negotiables</h2>
      <p>To stop the revenue leak, every course operator should commit to five principles:</p>
      <ol>
        <li><strong>Own your customer data</strong> — every golfer who books should be in your database, not a third party's.</li>
        <li><strong>Control your lowest price</strong> — if a discounted rate exists, it should be on your website, not GolfNow's.</li>
        <li><strong>Maintain direct customer relationships</strong> — communicate with golfers yourself, not through an intermediary.</li>
        <li><strong>Capture 100% of online revenue</strong> — no barter, no commission splits, no revenue sharing.</li>
        <li><strong>Remove third-party inventory listings at reduced rates</strong> — every Hot Deal is a vote to let someone else profit from your course's capacity.</li>
      </ol>

      <h2>The Bottom Line</h2>
      <p>The Philly market analysis is a snapshot of a national pattern. Multiply $15,545 per day across 50 markets, and the aggregate revenue transfer from courses to platforms is staggering. The technology to stop it exists — it just requires operators to choose direct over convenient.</p>
    `,
  },
];
