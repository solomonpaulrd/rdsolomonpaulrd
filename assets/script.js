const topicDetails = {
  requirements: {
    title: "Requirement gathering",
    intro: "Turning an unclear business request into a measurable analytical problem, agreed KPIs and a deliverable the audience can use.",
    evidence: [
      "Advertising: campaign pacing, delivery, revenue, CTR, viewability and post-campaign reporting requirements.",
      "Sales: audience-selector, pipeline, product, revenue and account-performance reporting.",
      "Operations: AHT, FCR, CSAT, service level, abandonment, staffing and anomaly-investigation needs.",
      "Leadership: concise executive KPIs, trend explanations, risk flags and decision-focused summaries.",
      "Product and web: experiment hypothesis, success metrics, guardrails, UAT criteria and performance monitoring.",
      "Fraud: translate behaviours and operational signals into testable risk rules and investigation views."
    ],
    tools: ["Stakeholder interviews", "KPI dictionary", "User stories", "Acceptance criteria", "Process maps", "JIRA", "Confluence"],
    outcome: "A traceable path from business question → data requirement → analysis → validated insight → action."
  },
  analysis: {
    title: "Data analysis",
    intro: "Analysis across SQL, Python, Excel and BI—from quick diagnostic work to reusable decision models.",
    evidence: [
      "SQL aggregations, joins, CTEs, window functions, cohort and time-series comparisons.",
      "Python EDA using Pandas and NumPy for distributions, segments, anomalies, correlations and business rules.",
      "Excel analysis using PivotTables, XLOOKUP, INDEX/MATCH, SUMIFS, IF logic, Power Query and VBA.",
      "Advertising analysis: impressions, clicks, CTR, CPM/eCPM, fill rate, viewability, completion and revenue.",
      "Call-centre analysis: AHT, CSAT, FCR, service level, abandonment, occupancy, quality and fraud indicators.",
      "Audience and content analysis: engagement, subscription, emotion, persona, clustering and targeting signals."
    ],
    tools: ["SQL", "BigQuery", "Python", "Excel", "Power BI", "Tableau", "Looker Studio"],
    outcome: "Evidence that explains what happened, why it happened and what the business should do next."
  },
  cleaning: {
    title: "Data cleaning & validation",
    intro: "Practical controls used to make analytical datasets consistent, testable and safe to report.",
    evidence: [
      "SQL: CAST/SAFE_CAST, TRIM, NULL handling, de-duplication, CASE standardisation, date parsing and referential checks.",
      "Python: drop_duplicates, fillna, astype, to_datetime, string cleanup, outlier flags and schema assertions.",
      "Excel: Remove Duplicates, Text to Columns, TRIM/CLEAN, IFERROR, data validation and Power Query transformations.",
      "Reconcile source totals against output totals and investigate record-level exceptions.",
      "Validate API pagination, freshness, field completeness, expected ranges and mapping coverage.",
      "Maintain audit fields, validation status, load timestamps and data-quality summaries."
    ],
    tools: ["BigQuery SQL", "Pandas", "NumPy", "Excel", "Power Query", "Data quality rules"],
    outcome: "Trusted, documented data before it reaches a model, dashboard or stakeholder."
  },
  sttm: {
    title: "STTM & analytical artefacts",
    intro: "Source-to-target mapping and delivery artefacts used to keep business logic, data engineering and testing aligned.",
    evidence: [
      "A/B testing: experiment ID, variant, exposure, conversion, device, source and guardrail metrics.",
      "Website performance: page URL, template, Core Web Vitals, traffic, engagement and conversion mapping.",
      "E-commerce: product, inventory, order, price, discount, revenue and margin mapping.",
      "Advertising: GAM order/line-item/creative dimensions mapped to delivery and revenue measures.",
      "GA4: events, parameters, session/user fields and BigQuery export schemas.",
      "Subscription: user, entitlement, product, conversion, churn and engagement fields.",
      "Audience: behavioural, demographic, campaign, content, emotion and persona features.",
      "Call centre and fraud: agent, interaction, KPI, event, rule, score and investigation outcome.",
      "Delivery artefacts: user stories, acceptance criteria, data dictionary, KPI definitions, mapping sheet and UAT log."
    ],
    tools: ["STTM", "Data dictionary", "KPI catalogue", "User stories", "Acceptance criteria", "Lineage", "UAT log"],
    outcome: "A shared contract that reduces ambiguity between source systems, transformations and business reporting."
  },
  uat: {
    title: "User acceptance testing",
    intro: "Five examples of how analytical products can be checked with business users before release.",
    evidence: [
      "Dashboard reconciliation: compare headline KPIs with source-system and SQL control totals.",
      "Filter testing: confirm date, brand, product, campaign, audience and geography filters return expected results.",
      "Role-based view testing: validate that leadership, sales and operations views expose the right level of detail.",
      "Pipeline testing: verify late files, duplicate loads, schema changes, nulls and failed API calls are handled visibly.",
      "Experiment reporting: confirm variant assignment, conversion windows, exclusions and statistical outputs match the agreed design."
    ],
    tools: ["Test scenarios", "Expected vs actual", "Reconciliation SQL", "Defect log", "Business sign-off"],
    outcome: "A release that users trust because both calculations and real workflows have been tested."
  },
  dashboards: {
    title: "Dashboard development",
    intro: "A broad BI portfolio spanning executive, operational, commercial, advertising, product, audience and risk reporting.",
    evidence: [
      "Executive overview, revenue & profit, sales performance, manager performance and finance reporting.",
      "Call-centre operations, service level, staffing, quality, customer experience and fraud-risk views.",
      "Advertising delivery, GAM360, post-campaign, digital marketing, PPC, GA4 and web-performance dashboards.",
      "Subscription, first-party data, audience selector, personas, clustering and retargeting dashboards.",
      "Articles, content sections, brand safety, video, pre-roll/outstream and media engagement views.",
      "Product, inventory, forecasting, anomaly, predictive risk and model-monitoring dashboards."
    ],
    tools: ["Power BI", "Tableau", "Looker Studio", "DAX", "SQL", "BigQuery", "Python visuals"],
    outcome: "Dashboards designed around decisions, with drill paths, definitions, validation and clear ownership."
  },
  "semantic-models": {
    title: "Report & semantic models",
    intro: "Reusable analytical models that keep measures and dimensions consistent across reports.",
    evidence: [
      "Advertising delivery model: order, line item, creative, date, site, device and campaign KPIs.",
      "Sales performance model: account, salesperson, product, revenue, target and opportunity.",
      "Audience engagement model: user/segment, session, content, campaign, subscription and conversion.",
      "Content performance model: article, author, section, traffic, engagement, revenue and brand-safety flags.",
      "Subscription model: customer, product, entitlement, conversion, engagement, renewal and churn.",
      "Call-centre model: interaction, agent, queue, time, quality and service measures.",
      "Fraud-risk model: entity, behaviour, rule, anomaly, score and investigation outcome.",
      "Order profitability model: product, region, manager, discount, cost, revenue, profit and margin.",
      "Experiment model: test, variant, exposure, conversion, segment and statistical result.",
      "Executive KPI model: common calendar, organisation, target, actual, variance and status dimensions."
    ],
    tools: ["Star schema", "Facts & dimensions", "Power BI relationships", "Tableau data sources", "BigQuery marts", "KPI measures"],
    outcome: "One governed version of business logic that can support many reports."
  },
  pipelines: {
    title: "Data pipelines",
    intro: "Small-to-medium analytical pipelines that automate ingestion, transformation, quality checks and reporting.",
    evidence: [
      "API → Python validation → GCS → Dataflow → BigQuery → dashboard.",
      "GAM360 export → BigQuery scheduled transformation → advertising semantic model → Power BI/Looker.",
      "Piano behavioural API → mapping and enrichment → audience segments → DMP reporting.",
      "GA4 BigQuery export → event/session models → engagement and conversion reporting.",
      "Survey API → pagination and schema validation → Parquet in GCS → analytical tables.",
      "Web scraping → text cleaning → ML risk classification → brand-safety reporting.",
      "Content and feedback text → TF-IDF/LDA/PCA/clustering → topic and audience insights.",
      "Excel/CSV operational files → controlled cleaning → SQL data mart → Tableau dashboard.",
      "Airflow/Composer orchestration → freshness and validation checks → reporting layer.",
      "Model scores → business risk bands → BigQuery output → decision dashboard."
    ],
    tools: ["Python", "SQL", "BigQuery", "GCS", "Dataflow", "Airflow/Composer", "APIs", "Parquet"],
    outcome: "Repeatable reporting with fewer manual steps, visible quality checks and reusable outputs."
  },
  stakeholders: {
    title: "Stakeholder management",
    intro: "Working between business decision-makers, operational users and technical teams to deliver useful analytics.",
    evidence: [
      "Partnered closely with the Head of Data Insights and data-science leadership.",
      "Presented and translated insights for senior leadership and CEO-level audiences where required.",
      "Worked with Advertising, Ad Operations, Sales, Marketing, Finance, B2B/B2C, Product and Operations teams.",
      "Collaborated with data engineers on source design, pipeline logic, orchestration and data-quality resolution.",
      "Supported managers and frontline operational teams with root-cause views and action-focused reporting.",
      "Managed requirements, prioritisation, validation, feedback, UAT, knowledge transfer and adoption."
    ],
    tools: ["Workshops", "User stories", "Demos", "UAT", "JIRA", "Confluence", "Agile/Scrum", "Slack"],
    outcome: "Technical delivery stays connected to business value, ownership and adoption."
  },
  sql: {
    title: "SQL & BigQuery",
    intro: "SQL used for analysis, validation, data marts, KPI logic and reporting performance.",
    evidence: [
      "Joins, UNIONs, CTEs, nested queries and reusable views.",
      "GROUP BY aggregations, CASE logic, conditional sums/counts and safe division.",
      "Window functions: ROW_NUMBER, RANK, LAG, LEAD, running totals and rolling averages.",
      "Date/time analysis, cohorts, period comparison, funnels and retention logic.",
      "BigQuery arrays/structs, partitioning, clustering, scheduled queries and cost-aware filtering.",
      "Data validation, duplicate detection, reconciliation, exception outputs and audit fields.",
      "Analytical marts for advertising, sales, audience, content, subscription, operations and fraud."
    ],
    tools: ["SQL", "BigQuery", "Redshift", "Snowflake", "PostgreSQL", "Data marts"],
    outcome: "Fast, traceable business logic that can be reused by analysts and BI tools."
  },
  tableau: {
    title: "Tableau",
    intro: "Enterprise and customised dashboards for operational, commercial and leadership audiences.",
    evidence: [
      "70+ automated enterprise dashboards at Concentrix and 10+ customised dashboards at Mediahuis.",
      "Calculated fields, parameters, sets, groups, bins and table calculations.",
      "LOD expressions including FIXED, INCLUDE and EXCLUDE.",
      "Dashboard actions, filters, highlighting, navigation and drill-down.",
      "Dual-axis, reference lines, forecasting, trend views, cohort and KPI designs.",
      "Published data sources, extracts, refresh management, permissions and performance optimisation."
    ],
    tools: ["Tableau Desktop", "Tableau Server", "LOD", "Parameters", "Actions", "Extracts", "SQL"],
    outcome: "Scalable dashboards that support both daily operations and senior review."
  },
  powerbi: {
    title: "Power BI",
    intro: "Decision-focused reports supported by reusable models, DAX and governed publishing.",
    evidence: [
      "Star-schema modelling, relationships, date tables and measure organisation.",
      "DAX: CALCULATE, FILTER, SUMX, DIVIDE, SWITCH, ranking, time intelligence and scenario measures.",
      "Power Query cleaning, merging, appending, parameterisation and data profiling.",
      "KPI cards, trends, decomposition trees, waterfall, scatter, matrix, drill-through and tooltips.",
      "Bookmarks, field parameters, Top N, what-if controls, row-level security and mobile layouts.",
      "Publishing, refresh, workspaces, apps, access and stakeholder-ready navigation."
    ],
    tools: ["Power BI", "DAX", "Power Query", "Data modelling", "RLS", "Power BI Service"],
    outcome: "Interactive BI experiences that join trustworthy measures with a clear decision path."
  },
  python: {
    title: "Python analytics",
    intro: "Python used for data preparation, EDA, automation, forecasting, NLP and machine learning.",
    evidence: [
      "Pandas pipelines for cleaning, transformation, grouping, joining, feature creation and export.",
      "NumPy for vectorised rules, risk bands, simulation and numerical processing.",
      "Matplotlib/Seaborn for distributions, trends, heatmaps, scatter plots, waterfall and model diagnostics.",
      "scikit-learn for preprocessing, logistic regression, random forest, clustering, PCA and evaluation.",
      "Time-series work including ARIMA sales forecasting.",
      "NLP: TF-IDF, LDA, text relationships, clustering, emotion classification and content-risk analysis.",
      "API integration, web scraping, automated reporting and loading outputs back to BigQuery."
    ],
    tools: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "scikit-learn", "Statsmodels", "APIs"],
    outcome: "Maintainable analytical workflows that move from raw data to explainable business output."
  },
  excel: {
    title: "Excel & VBA",
    intro: "Excel used for fast analysis, operational reporting, data-quality work and business-friendly delivery.",
    evidence: [
      "XLOOKUP, VLOOKUP, INDEX/MATCH, SUMIFS, COUNTIFS, IF/IFS and IFERROR.",
      "PivotTables, PivotCharts, slicers, conditional formatting and scenario analysis.",
      "Power Query for imports, cleaning, merging, transformation and refresh.",
      "Dynamic arrays, text/date functions, named ranges and structured tables.",
      "Data validation, duplicate handling, reconciliation and audit controls.",
      "VBA automation for project-delivery and team-performance dashboards."
    ],
    tools: ["Excel", "Advanced formulas", "PivotTables", "Power Query", "VBA", "Dashboarding"],
    outcome: "Accessible and controlled analysis for teams that work primarily in spreadsheets."
  },
  web: {
    title: "HTML & web analytics",
    intro: "Front-end and web-analytics experiments used to make analytical outputs easier to explore.",
    evidence: [
      "Interactive audience-selector interface for choosing suitable campaign segments.",
      "Emotion-analytics HTML concept showing feedback, dominant emotion, risk and recommended action.",
      "Security-observability interface using Angular with a Flask analytics API.",
      "Mobile-site A/B testing and performance optimisation using Google analytics tools.",
      "GA4/GTM event thinking, page templates, traffic acquisition and conversion analysis.",
      "SEO, PPC, content and digital marketing performance reporting."
    ],
    tools: ["HTML", "CSS", "JavaScript", "Angular", "Flask", "GA4", "GTM", "SEO/PPC"],
    outcome: "Analytical experiences that are understandable, interactive and aligned to web behaviour."
  },
  aiml: {
    title: "AI, ML & agentic analytics",
    intro: "Experimental AI/ML workflows that combine governed data, model outputs and business interpretation.",
    evidence: [
      "BigQuery data → Python feature preparation → Gemini/LLM prompt → structured insight → validated output back to BigQuery.",
      "Emotion classification → persona rules → audience segment → targeting recommendation → campaign reporting.",
      "TF-IDF/LDA/PCA/clustering for content, audience and feedback understanding.",
      "Random forest and classification workflows for discount risk, profit leakage and operational risk.",
      "Web-scraped content → text features → brand-safety risk model → report.",
      "ChatGPT Enterprise agent experiments to generate controlled insights from survey and analytical datasets.",
      "Exploration of BERT-family models, Gemini, Mistral and ChatGPT APIs for business use cases."
    ],
    tools: ["Gemini", "ChatGPT APIs", "BERT", "Mistral", "scikit-learn", "Vertex AI", "BigQuery", "Python"],
    outcome: "AI acts as an analytical accelerator, with structured data, validation and human decision ownership."
  },
  cloud: {
    title: "GCP & Azure",
    intro: "Cloud platforms used to automate analytical ingestion, transformation, storage and reporting.",
    evidence: [
      "BigQuery datasets, schemas, SQL marts, scheduled queries, partitions, clusters and BI connections.",
      "GCS buckets for raw/validated layers, CSV/JSON/Parquet storage and pipeline hand-offs.",
      "Dataflow/Apache Beam for API and file transformation pipelines.",
      "Airflow/Cloud Composer for orchestration, dependencies, monitoring and retries.",
      "Vertex AI and Gemini experiments for model and LLM-supported analytics.",
      "Azure Data Factory and Databricks knowledge for ingestion, transformation and analytics engineering.",
      "Docker, DevOps, Snowflake, S3 and Redshift exposure supporting wider data ecosystems."
    ],
    tools: ["BigQuery", "GCS", "Dataflow", "Composer", "Vertex AI", "ADF", "Databricks", "Docker"],
    outcome: "Cloud reporting flows that move data reliably from source to governed analytical use."
  },
  looker: {
    title: "Looker & Looker Studio",
    intro: "Lightweight, shareable reporting for media, web, content, campaign and leadership use cases.",
    evidence: [
      "Connected governed BigQuery views and analytical marts to reporting.",
      "Built scorecards, time-series, tables, filters and drillable campaign/content views.",
      "Created GA4 engagement, acquisition, event and conversion reporting.",
      "Supported advertising, article, section, audience and commercial performance views.",
      "Applied calculated fields, blended sources, date controls and stakeholder-friendly navigation.",
      "Designed recurring business reports for fast browser-based access and sharing."
    ],
    tools: ["Looker Studio", "BigQuery", "GA4", "Calculated fields", "Blended data", "Filters"],
    outcome: "Fast access to governed KPIs for teams that need simple, shareable reporting."
  },
  bigquery: {
    title: "BigQuery engineering & analytics",
    intro: "BigQuery used as the analytical centre for media, advertising, audience, web and commercial reporting.",
    evidence: [
      "Designed datasets, tables, views, schemas and reusable reporting marts.",
      "Built scheduled SQL transformations for recurring dashboards and analysis.",
      "Modelled GAM360, GA4, Piano, campaign, audience, content and subscription datasets.",
      "Used partitioning, clustering and selective querying for performance and cost control.",
      "Loaded API, GCS and model outputs into validated analytical tables.",
      "Connected BigQuery models to Power BI, Tableau, Looker Studio and Python workflows."
    ],
    tools: ["BigQuery", "Scheduled queries", "Schemas", "Partitioning", "Clustering", "SQL marts"],
    outcome: "A scalable and reusable analytical layer supporting many reporting and AI use cases."
  },
  visualization: {
    title: "Data visualisation portfolio",
    intro: "Visual choices selected for the question—from a single operational KPI to multivariate exploration and model explanation.",
    evidence: [
      "KPI cards, bullet charts, gauges and variance indicators for targets and health.",
      "Bar, column, stacked, lollipop and dot plots for category comparison.",
      "Line, area, slope and bump charts for trends and rank movement.",
      "Scatter, bubble, hexbin and correlation heatmaps for relationships.",
      "Waterfall, Pareto, funnel and decomposition trees for contribution and drivers.",
      "Treemap, sunburst and Sankey views for hierarchy and flow.",
      "Histogram, box, violin and density plots for distributions and anomalies.",
      "Maps, cohorts, retention grids, clustering profiles and forecast intervals.",
      "Python model diagnostics including confusion matrix, ROC/PR curves and feature importance."
    ],
    tools: ["Power BI", "Tableau", "Looker Studio", "Matplotlib", "Seaborn", "Python visuals"],
    outcome: "The chart serves the decision: comparison, trend, composition, relationship, distribution, flow or prediction."
  },
  secondary: {
    title: "Wider technology & delivery toolkit",
    intro: "Supporting technologies and delivery practices used directly or through project collaboration.",
    evidence: [
      "Vertex AI for cloud AI experiments; Redshift, S3 and Snowflake across wider data-platform contexts.",
      "Azure Data Factory and Databricks for data-engineering learning and pipeline design.",
      "Docker and DevOps concepts for reproducible delivery and environment management.",
      "Alteryx for visual analytics workflow familiarity.",
      "GA4, GTM, GAM360 and DMP concepts for media, advertising and audience data.",
      "JIRA, Confluence, Agile/Scrum and Slack for planning, documentation and cross-team delivery.",
      "SEO, SEM and PPC for digital acquisition, content and campaign optimisation."
    ],
    tools: ["Vertex AI", "Redshift", "S3", "Azure", "Docker", "Databricks", "Snowflake", "Alteryx", "JIRA"],
    outcome: "A broad toolkit for working across analytics, engineering, media technology and business delivery."
  },
  "mediahuis-pipelines": {
    title: "Mediahuis pipeline examples",
    intro: "Ten representative analytical pipelines from the responsibilities described in the résumé.",
    evidence: [
      "GAM360 delivery export → BigQuery → campaign model → BI delivery dashboard.",
      "Piano behavioural API → audience enrichment → contextual segment reporting.",
      "GA4 export → event/session transformation → digital engagement dashboard.",
      "TGI survey API → Python validation → GCS → Dataflow → BigQuery insights.",
      "Content scrape → NLP cleaning → brand-safety classification → risk dashboard.",
      "Article metadata + traffic + engagement → content performance model.",
      "Subscription + behaviour → first-party audience segments and conversion reporting.",
      "Campaign + demographics + emotion → persona and targeting experiment.",
      "BigQuery scheduled SQL → reusable KPI mart → Power BI/Looker reports.",
      "Model score output → risk/segment band → validation → reporting table."
    ],
    tools: ["Python", "SQL", "BigQuery", "GCS", "Dataflow", "Airflow", "Power BI", "Looker Studio"],
    outcome: "An analytical layer connecting media, audience and commercial source data to business decisions."
  },
  "mediahuis-projects": {
    title: "Mediahuis project portfolio",
    intro: "Major project themes from 2020–2026.",
    evidence: [
      "Post-campaign reporting automation and A/B-test reporting.",
      "Audience Selector Dashboard for sales recommendations.",
      "GAM360 + Piano contextual audience segmentation.",
      "GA4 migration support and BigQuery analytics models.",
      "TGI survey integration using Python and Dataflow.",
      "Experimental AI audience intelligence and persona targeting.",
      "NLP content optimisation and audience clustering.",
      "Brand-safety risk analytics using web scraping and ML.",
      "Advertising, sales, subscription, content, video and leadership dashboards.",
      "First-party data, B2B/B2C and behavioural reporting."
    ],
    tools: ["GCP", "Power BI", "Tableau", "Looker Studio", "Python", "SQL", "GAM360", "GA4", "Piano"],
    outcome: "Cross-functional analytics across media, advertising, audiences, subscriptions and commercial decision-making."
  },
  experimentation: {
    title: "A/B testing & optimisation artefacts",
    intro: "Artefacts and analysis used to structure and evaluate web and product experiments.",
    evidence: [
      "Experiment brief: business problem, hypothesis, primary metric and guardrails.",
      "User story and acceptance criteria for the intended experience.",
      "STTM for test ID, variant, exposure, device, source, behaviour and conversion.",
      "Pre-test quality checks for tracking, traffic allocation and sample health.",
      "Result table with uplift, confidence, segment breakdown and operational notes.",
      "Website speed view connecting page performance to acquisition and conversion.",
      "UAT log and decision record covering launch, iteration or rollback."
    ],
    tools: ["A/B testing", "GA/GA4", "GTM", "Excel", "SQL", "Web analytics", "User stories"],
    outcome: "At Regalix/Google assignment, mobile-site optimisation contributed to customer acquisition increasing from 10% to 42%."
  }
};

const projects = [
  { id: "p01", title: "Post-campaign reporting automation", category: "Media & Ads", summary: "Integrated advertising sources into a repeatable GCP/Python reporting flow for campaign delivery, outcomes and A/B-test review.", problem: "Manual and fragmented campaign reporting slowed analysis and made comparisons difficult.", work: ["Mapped campaign dimensions and KPIs", "Integrated multiple sources", "Automated cleaning and aggregation", "Created reviewable report outputs"], tools: ["Python", "GCP", "BigQuery", "Advertising"], result: "Faster, more consistent post-campaign reporting for commercial and advertising teams." },
  { id: "p02", title: "Audience Selector Dashboard", category: "Product & Sales", summary: "A self-service tool that helped Sales identify suitable target audiences more efficiently.", problem: "Audience recommendations depended on manual analyst support and scattered segment information.", work: ["Gathered sales requirements", "Modelled audience attributes", "Designed selector logic", "Built an interactive dashboard workflow"], tools: ["Tableau", "SQL", "Audience", "Sales"], result: "Automated audience discovery and supported faster campaign planning." },
  { id: "p03", title: "GAM360 + Piano audience intelligence", category: "Media & Ads", summary: "Joined campaign delivery with behavioural signals to support contextual segmentation and real-time performance analysis.", problem: "Advertising delivery and user behaviour were analysed separately.", work: ["Mapped GAM and Piano fields", "Created combined behavioural features", "Built reporting models", "Supported DMP data products"], tools: ["GAM360", "Piano", "BigQuery", "DMP"], result: "A richer view of campaigns, context and audience behaviour." },
  { id: "p04", title: "GA4 migration & BigQuery analytics models", category: "Data Engineering", summary: "Supported GA4 migration and structured event-level data into useful BigQuery models for engagement reporting.", problem: "The migration required new schemas, definitions and analytical logic.", work: ["Reviewed events and parameters", "Supported schema design", "Created transformation logic", "Validated reporting outputs"], tools: ["GA4", "BigQuery", "GTM", "SQL"], result: "A usable analytical layer for web engagement and conversion reporting." },
  { id: "p05", title: "TGI survey integration pipeline", category: "Data Engineering", summary: "Led API extraction, validation, transformation and reporting for survey data using Python and Dataflow.", problem: "Survey data needed a reliable, repeatable path from API to analysis.", work: ["Handled API pagination", "Validated fields and coverage", "Built Python/Dataflow transformations", "Created analytical outputs"], tools: ["Python", "API", "Dataflow", "BigQuery"], result: "An end-to-end survey-data pipeline ready for insight generation." },
  { id: "p06", title: "AI audience intelligence flow", category: "AI / ML", summary: "Experimental model connecting behaviour, campaigns, revenue, conversion, demographics, subscriptions and engagement.", problem: "Audience attributes were spread across many datasets and difficult to interpret together.", work: ["Combined multi-source features", "Created audience clusters", "Tested prediction concepts", "Explored automated insight agents"], tools: ["Python", "AI", "Clustering", "BigQuery"], result: "A foundation for persona, prediction and audience-targeting experiments." },
  { id: "p07", title: "Emotion → persona → targeting", category: "AI / ML", summary: "Experimental pipeline that turns text emotion into persona features and audience recommendations.", problem: "Feedback and content emotion were not connected to activation choices.", work: ["Applied pretrained emotion classification", "Created persona rules", "Mapped personas to segments", "Structured outputs for campaign use"], tools: ["NLP", "Python", "BERT", "Audience"], result: "A testable path from unstructured text to targeting insight." },
  { id: "p08", title: "Content clustering & optimisation", category: "AI / ML", summary: "NLP workflow using TF-IDF, LDA, PCA and clustering to understand content patterns and audience segments.", problem: "Large volumes of content and engagement data required structured themes.", work: ["Prepared text features", "Reduced dimensions", "Created clusters/topics", "Compared engagement by segment"], tools: ["TF-IDF", "LDA", "PCA", "Clustering"], result: "Clearer content themes and audience-segment insight." },
  { id: "p09", title: "Brand-safety risk analytics", category: "AI / ML", summary: "Web-scraping and ML pipeline to identify potential brand-safety risks across news content sections.", problem: "Manual review could not efficiently cover changing content at scale.", work: ["Scraped content", "Cleaned and labelled text", "Built risk features/model", "Reported section-level risk"], tools: ["Web scraping", "Python", "NLP", "ML"], result: "A repeatable experimental approach for surfacing content risk." },
  { id: "p10", title: "Advertising delivery command centre", category: "Media & Ads", summary: "Dashboard for campaign pacing, delivery, CTR, eCPM, viewability, revenue and risk signals.", problem: "Ad-operations and commercial teams needed a shared view of campaign health.", work: ["Defined delivery KPIs", "Built campaign drill-down", "Flagged under/over-delivery", "Added revenue and action views"], tools: ["Power BI", "GAM360", "BigQuery", "DAX"], result: "A decision view for campaign monitoring and optimisation." },
  { id: "p11", title: "Subscription & first-party data analytics", category: "Media & Ads", summary: "Behavioural and subscription reporting connecting engagement, conversion and audience value.", problem: "First-party signals needed to be joined into business-friendly segments.", work: ["Mapped subscriber and behaviour data", "Created segment measures", "Built engagement funnels", "Supported activation views"], tools: ["BigQuery", "Power BI", "Audience", "Subscription"], result: "A clearer view of audience value and subscription behaviour." },
  { id: "p12", title: "Article & section performance", category: "Media & Ads", summary: "Content reporting across articles, sections, authors, traffic, engagement, revenue and risk.", problem: "Editorial and commercial measures needed a consistent content model.", work: ["Created article/section dimensions", "Joined traffic and revenue", "Built trend and contribution views", "Added brand-safety context"], tools: ["Looker Studio", "BigQuery", "Content", "Revenue"], result: "Decision-ready content performance reporting." },
  { id: "p13", title: "Video advertising analytics", category: "Media & Ads", summary: "Reporting for pre-roll, post-roll/outstream formats, delivery, completion, engagement and revenue.", problem: "Video formats required a dedicated view of quality and monetisation.", work: ["Mapped video format dimensions", "Defined completion metrics", "Compared site/audience performance", "Added revenue contribution"], tools: ["Video", "GAM360", "SQL", "BI"], result: "Comparable performance views across video inventory and audience segments." },
  { id: "p14", title: "B2B sales & revenue analytics", category: "Product & Sales", summary: "Commercial reporting for account, salesperson, product, order, revenue, CTR and opportunity signals.", problem: "Sales teams needed prioritised account actions, not only historical totals.", work: ["Built salesperson/order mart", "Created performance quartiles", "Added upsell/risk rules", "Ranked opportunities"], tools: ["BigQuery", "SQL", "Power BI", "Sales"], result: "Action-oriented views for growth, risk and account health." },
  { id: "p15", title: "Revenue, discount & profit intelligence", category: "Product & Sales", summary: "Power BI model analysing product, region, manager, discount, cost, revenue, profit and margin.", problem: "High revenue did not always translate into healthy profit.", work: ["Built star schema", "Created DAX KPI measures", "Added discount/risk buckets", "Designed what-if and Top N views"], tools: ["Power BI", "DAX", "Excel", "Data modelling"], result: "A clear view of profitability drivers and risky discount behaviour." },
  { id: "p16", title: "Quikr order & inventory analytics", category: "Product & Sales", summary: "Historical analysis supporting order, inventory and sales-index improvement strategies.", problem: "Teams needed evidence behind order and inventory performance changes.", work: ["Compiled historical data", "Compared order/inventory trends", "Identified sales drivers", "Shared improvement insights"], tools: ["Excel", "Sales", "Inventory", "Analysis"], result: "Data-backed support for sales and inventory decisions." },
  { id: "p17", title: "Call-centre operations command centre", category: "Operations", summary: "Operational reporting across AHT, CSAT, FCR, service level, abandonment, quality and productivity.", problem: "Senior and frontline teams needed consistent operational KPIs and drill-downs.", work: ["Translated requirements into metrics", "Automated SQL data sources", "Built Tableau dashboard portfolio", "Added team/agent/root-cause views"], tools: ["Tableau", "SQL", "Call centre", "KPIs"], result: "Scalable daily and leadership reporting across operational teams." },
  { id: "p18", title: "Employee fraud FMEA model", category: "Fraud & Risk", summary: "Fraud analytics model combining operational and behavioural metrics to identify suspicious patterns.", problem: "Potential fraud behaviour was hidden inside normal performance data.", work: ["Designed FMEA-style risk logic", "Combined AHT/CSAT/FCR/service signals", "Identified unusual networks", "Created investigation outputs"], tools: ["Python", "SQL", "FMEA", "Fraud"], result: "A structured approach to detecting and reviewing employee fraud patterns." },
  { id: "p19", title: "Operational anomaly detection", category: "Operations", summary: "Model and impact analysis to detect performance deviations and support root-cause investigation.", problem: "KPI changes were found late and root causes required manual review.", work: ["Established baselines", "Flagged abnormal performance", "Measured impact", "Linked outlier feedback"], tools: ["Python", "Statistics", "Anomaly detection", "Tableau"], result: "Faster identification and explanation of operational performance shifts." },
  { id: "p20", title: "Feedback text network classifier", category: "AI / ML", summary: "Text-network and clustering approach for finding whether issues related to product, brand or agent.", problem: "Open-text feedback did not reveal consistent root causes through manual reading.", work: ["Prepared feedback text", "Encoded word relationships", "Created clusters/classes", "Linked themes to performance"], tools: ["NLP", "Python", "Clustering", "Text analysis"], result: "Structured root-cause categories from unstructured customer feedback." },
  { id: "p21", title: "Service-level billing optimisation", category: "Operations", summary: "Billing and optimisation analysis identifying cost and customer-experience opportunities.", problem: "Service performance and engagement cost needed to be optimised together.", work: ["Modelled billing/service metrics", "Compared scenarios", "Validated operational trade-offs", "Presented improvement opportunity"], tools: ["Python", "SQL", "Optimisation", "Operations"], result: "Identified 16% service-level cost-saving opportunity, 3% CSAT improvement and 7% engagement-time cost reduction." },
  { id: "p22", title: "Seasonal performance classifier", category: "AI / ML", summary: "Statistical, clustering and predictive analysis to identify best-potential metrics by season.", problem: "Performance potential varied by season and required evidence beyond averages.", work: ["Created seasonal features", "Clustered comparable groups", "Built predictive classifiers", "Used T-tests to validate results"], tools: ["Statistics", "Clustering", "Classification", "T-test"], result: "Stronger evidence for seasonal customer-performance conversations." },
  { id: "p23", title: "ARIMA sales forecasting", category: "AI / ML", summary: "Time-series forecasting project used to predict sales and translate model output into business insight.", problem: "Sales planning needed a forward-looking baseline.", work: ["Prepared time series", "Tested ARIMA assumptions", "Generated forecasts", "Interpreted business implications"], tools: ["ARIMA", "Python", "Forecasting", "Sales"], result: "A predictive baseline for sales planning and insight generation." },
  { id: "p24", title: "Mobile-site A/B testing", category: "Web & Marketing", summary: "Experimentation and web analytics used to improve mobile-site performance and customer acquisition.", problem: "The mobile experience limited visitor conversion and audience growth.", work: ["Defined experiment measures", "Analysed Google analytics data", "Compared variants and speed", "Recommended optimisation"], tools: ["A/B testing", "Web analytics", "Google tools", "Optimisation"], result: "Customer acquisition increased from 10% to 42% during the assignment." },
  { id: "p25", title: "VBA project-delivery dashboard", category: "Operations", summary: "Automated Excel dashboard for project delivery and team performance monitoring.", problem: "Operational tracking depended on repeated manual reporting.", work: ["Structured delivery data", "Built VBA automation", "Added performance views", "Reduced repetitive preparation"], tools: ["Excel", "VBA", "Dashboard", "Operations"], result: "A reusable view of project delivery and team performance." },
  { id: "p26", title: "SEO, PPC & digital marketing analytics", category: "Web & Marketing", summary: "Performance analysis and optimisation across SEO, SEM, PPC and content activities.", problem: "Prospects needed practical digital-growth recommendations aligned to Google practices.", work: ["Reviewed acquisition channels", "Analysed keywords/campaigns", "Recommended content and PPC actions", "Managed delivery"], tools: ["SEO", "SEM", "PPC", "Content"], result: "Clear digital-marketing recommendations with accountable delivery." },
  { id: "p27", title: "Security Observability Dashboard", category: "Fraud & Risk", summary: "Angular and Flask dashboard concept for security events, vulnerabilities, traceability and ML risk scoring.", problem: "Security teams need consolidated risk KPIs and investigation-ready events.", work: ["Built Angular interface", "Created Flask API", "Processed CSV/security data", "Added ML risk scoring concept"], tools: ["Angular", "Flask", "Python", "Security"], result: "A full-stack portfolio project demonstrating analytical UI and API integration." },
  { id: "p28", title: "Discount & profit-leakage risk model", category: "Fraud & Risk", summary: "Classification workflow producing risk scores and High/Medium/Low business bands.", problem: "Discount and cost behaviour could hide orders that eroded profitability.", work: ["Engineered order features", "Compared logistic/random-forest/NN approaches", "Evaluated class performance", "Created explainable risk bands"], tools: ["Python", "scikit-learn", "Risk scoring", "Power BI"], result: "A practical analytical model for prioritising review of risky orders." }
];

const dashboardThemes = [
  ["Executive Overview", "Revenue · profit · trend · risk"],
  ["Sales Performance", "Target · pipeline · account · conversion"],
  ["Revenue & Profit", "Margin · discount · contribution · ROI"],
  ["Manager Performance", "Rank · target · productivity · trend"],
  ["Ad Delivery", "Impressions · clicks · CTR · pacing"],
  ["GAM360 Analytics", "Order · line item · creative · eCPM"],
  ["Post-campaign Report", "Delivery · audience · outcome · insight"],
  ["Digital Marketing", "Channel · spend · conversion · ROAS"],
  ["GA4 Web Analytics", "Users · sessions · events · conversion"],
  ["Ad Operations", "Pacing · inventory · risk · action"],
  ["Call-centre Operations", "AHT · FCR · CSAT · service level"],
  ["Customer Experience", "Quality · feedback · theme · impact"],
  ["Fraud Analytics", "Rule · anomaly · network · risk score"],
  ["Subscription Analytics", "Acquire · engage · renew · churn"],
  ["First-party Data", "Identity · behaviour · value · segment"],
  ["Audience Selector", "Persona · reach · affinity · campaign"],
  ["Emotion & Persona", "Emotion · segment · action · response"],
  ["Content Performance", "Article · section · author · value"],
  ["Brand Safety", "Content · topic · score · review"],
  ["Video Analytics", "Pre-roll · outstream · completion · yield"],
  ["B2B Commercial", "Account · order · product · opportunity"],
  ["Inventory & Orders", "Stock · order · price · sales index"],
  ["Forecasting", "Actual · baseline · forecast · variance"],
  ["Clustering Explorer", "Feature · cluster · profile · target"],
  ["Model Monitoring", "Score · band · drift · performance"]
];

const capabilityTopics = [
  "requirements", "sql", "powerbi", "tableau", "python", "excel",
  "dashboards", "visualization", "pipelines", "semantic-models", "aiml", "cloud",
  "bigquery", "looker", "secondary", "stakeholders"
];
const filters = ["All", "Media & Ads", "Product & Sales", "Operations", "Fraud & Risk", "AI / ML", "Data Engineering", "Web & Marketing"];

let activeFilter = "All";
let showAll = false;
let lastFocusedElement = null;

const capabilityGrid = document.querySelector("#capability-grid");
const projectGrid = document.querySelector("#project-grid");
const projectFilters = document.querySelector("#project-filters");
const projectSearch = document.querySelector("#project-search");
const resultCount = document.querySelector("#result-count");
const showAllButton = document.querySelector("#show-all-projects");
const drawer = document.querySelector("#detail-drawer");
const drawerBackdrop = document.querySelector("#drawer-backdrop");
const drawerClose = document.querySelector("#drawer-close");

function escapeHTML(value) {
  return String(value).replace(/[&<>'"]/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;"
  }[character]));
}

function renderCapabilities() {
  capabilityGrid.innerHTML = capabilityTopics.map((key, index) => {
    const item = topicDetails[key];
    return `<button class="capability-tile" type="button" data-topic="${key}">
      <small>${String(index + 1).padStart(2, "0")} · evidence</small>
      <strong>${escapeHTML(item.title)}</strong>
      <b>+</b>
    </button>`;
  }).join("");
}

function renderFilters() {
  projectFilters.innerHTML = filters.map(filter => `<button class="filter-button${filter === activeFilter ? " active" : ""}" type="button" data-filter="${escapeHTML(filter)}">${escapeHTML(filter)}</button>`).join("");
}

function filteredProjects() {
  const query = projectSearch.value.trim().toLowerCase();
  return projects.filter(project => {
    const categoryMatch = activeFilter === "All" || project.category === activeFilter;
    const searchable = [project.title, project.category, project.summary, project.problem, project.result, ...project.work, ...project.tools].join(" ").toLowerCase();
    return categoryMatch && (!query || searchable.includes(query));
  });
}

function renderProjects() {
  const matches = filteredProjects();
  const focusedMode = activeFilter !== "All" || projectSearch.value.trim();
  const visible = showAll || focusedMode ? matches : matches.slice(0, 9);

  resultCount.textContent = `${matches.length} project${matches.length === 1 ? "" : "s"} found`;
  showAllButton.hidden = focusedMode || matches.length <= 9;
  showAllButton.innerHTML = showAll ? "Show fewer projects <span>−</span>" : `Show all ${matches.length} projects <span>+</span>`;

  if (!visible.length) {
    projectGrid.innerHTML = `<div class="empty-state"><strong>No matching projects.</strong><br>Try a different skill, tool or domain.</div>`;
    return;
  }

  projectGrid.innerHTML = visible.map((project, index) => `<article class="project-card">
    <div class="project-top"><span>${String(index + 1).padStart(2, "0")}</span><span>${escapeHTML(project.category)}</span></div>
    <div class="project-visual" aria-hidden="true"><i></i><i></i><i></i><i></i></div>
    <h3>${escapeHTML(project.title)}</h3>
    <p class="project-summary">${escapeHTML(project.summary)}</p>
    <div class="project-tags" aria-label="Project tools">${project.tools.slice(0, 4).map(tool => `<button type="button" data-search-tag="${escapeHTML(tool)}">${escapeHTML(tool)}</button>`).join("")}</div>
    <button class="project-open" type="button" data-project="${project.id}"><span>Open project details</span><b>+</b></button>
  </article>`).join("");
}

function renderDashboards() {
  const gallery = document.querySelector("#dashboard-gallery");
  gallery.innerHTML = dashboardThemes.map((item, index) => `<article class="dashboard-card">
    <small>${String(index + 1).padStart(2, "0")} / ${dashboardThemes.length}</small>
    <div class="mini-chart" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></div>
    <h3>${escapeHTML(item[0])}</h3>
    <p>${escapeHTML(item[1])}</p>
  </article>`).join("");
}

function topicMarkup(topic) {
  return `<div class="drawer-section">
      <h3>Where and how it was used</h3>
      <ul>${topic.evidence.map(item => `<li>${escapeHTML(item)}</li>`).join("")}</ul>
    </div>
    <div class="drawer-section">
      <h3>Tools & artefacts</h3>
      <div class="drawer-chips">${topic.tools.map(tool => `<span>${escapeHTML(tool)}</span>`).join("")}</div>
    </div>
    <div class="drawer-section">
      <h3>Business value</h3>
      <div class="drawer-result">${escapeHTML(topic.outcome)}</div>
    </div>`;
}

function projectMarkup(project) {
  return `<div class="drawer-section">
      <h3>Business problem</h3>
      <div class="drawer-result">${escapeHTML(project.problem)}</div>
    </div>
    <div class="drawer-section">
      <h3>Work completed</h3>
      <ul>${project.work.map(item => `<li>${escapeHTML(item)}</li>`).join("")}</ul>
    </div>
    <div class="drawer-section">
      <h3>Tools & capabilities</h3>
      <div class="drawer-chips">${project.tools.map(tool => `<span>${escapeHTML(tool)}</span>`).join("")}</div>
    </div>
    <div class="drawer-section">
      <h3>Result</h3>
      <div class="drawer-result">${escapeHTML(project.result)}</div>
    </div>`;
}

function openDrawer({ title, intro, markup }, sourceElement) {
  lastFocusedElement = sourceElement || document.activeElement;
  document.querySelector("#drawer-title").textContent = title;
  document.querySelector("#drawer-intro").textContent = intro;
  document.querySelector("#drawer-content").innerHTML = markup;
  drawerBackdrop.hidden = false;
  drawer.setAttribute("aria-hidden", "false");
  requestAnimationFrame(() => drawer.classList.add("open"));
  document.body.classList.add("drawer-open");
  drawerClose.focus();
}

function closeDrawer() {
  drawer.classList.remove("open");
  drawer.setAttribute("aria-hidden", "true");
  document.body.classList.remove("drawer-open");
  window.setTimeout(() => { drawerBackdrop.hidden = true; }, 280);
  if (lastFocusedElement) lastFocusedElement.focus();
}

document.addEventListener("click", event => {
  const topicButton = event.target.closest("[data-topic]");
  if (topicButton) {
    const topic = topicDetails[topicButton.dataset.topic];
    if (topic) openDrawer({ title: topic.title, intro: topic.intro, markup: topicMarkup(topic) }, topicButton);
    return;
  }

  const projectButton = event.target.closest("[data-project]");
  if (projectButton) {
    const project = projects.find(item => item.id === projectButton.dataset.project);
    if (project) openDrawer({ title: project.title, intro: project.summary, markup: projectMarkup(project) }, projectButton);
    return;
  }

  const tagButton = event.target.closest("[data-search-tag]");
  if (tagButton) {
    activeFilter = "All";
    projectSearch.value = tagButton.dataset.searchTag;
    renderFilters();
    renderProjects();
    projectSearch.focus();
    return;
  }

  const filterButton = event.target.closest("[data-filter]");
  if (filterButton) {
    activeFilter = filterButton.dataset.filter;
    showAll = false;
    renderFilters();
    renderProjects();
    return;
  }

  if (event.target.closest("[data-print]")) window.print();
});

projectSearch.addEventListener("input", () => { showAll = false; renderProjects(); });
showAllButton.addEventListener("click", () => { showAll = !showAll; renderProjects(); });
drawerClose.addEventListener("click", closeDrawer);
drawerBackdrop.addEventListener("click", closeDrawer);
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && drawer.classList.contains("open")) closeDrawer();
});

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector("#main-nav");
menuToggle.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
mainNav.addEventListener("click", event => {
  if (event.target.closest("a")) {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});

function setupGallery() {
  const gallery = document.querySelector("#dashboard-gallery");
  document.querySelector("#gallery-prev").addEventListener("click", () => gallery.scrollBy({ left: -610, behavior: "smooth" }));
  document.querySelector("#gallery-next").addEventListener("click", () => gallery.scrollBy({ left: 610, behavior: "smooth" }));

  let dragging = false;
  let startX = 0;
  let initialScroll = 0;
  gallery.addEventListener("pointerdown", event => {
    dragging = true;
    startX = event.clientX;
    initialScroll = gallery.scrollLeft;
    gallery.classList.add("dragging");
    gallery.setPointerCapture(event.pointerId);
  });
  gallery.addEventListener("pointermove", event => {
    if (!dragging) return;
    gallery.scrollLeft = initialScroll - (event.clientX - startX);
  });
  const stopDrag = () => { dragging = false; gallery.classList.remove("dragging"); };
  gallery.addEventListener("pointerup", stopDrag);
  gallery.addEventListener("pointercancel", stopDrag);
}

renderCapabilities();
renderFilters();
renderProjects();
renderDashboards();
setupGallery();
