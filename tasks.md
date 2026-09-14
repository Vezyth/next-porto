# Tasks

## [x] Fix profile page layout and add Experience section

- Fixed independent scroll: sidebar and main content each scroll independently.
- Layout is responsive: two-column on desktop, stacked on mobile.
- Added `Experience` section below Projects with three entries (Web Developer, IT Audit, Freelance Web Developer).
- FloatingNav centered on mobile.

## [x] Add Education section

- Created `data/education.tsx` with `EducationEntry` type and two entries (Bachelor of Information Systems, Mobile Development Cohort).
- Created `components/Education.tsx` consuming `data/education.tsx`, matching Experience card architecture (GraduationCap icon, title, dateRange, institution, location, description).
- Wired `Education` into `page.tsx` after `Experience` (order: Projects → Experience → Education).
- TypeScript check passes with no errors.
