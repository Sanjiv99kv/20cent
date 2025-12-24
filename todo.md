# Website Update Tasks - Detail Pages & Hero Restore

- [ ] **Hero Restoration**
    - [ ] Revert `Home.tsx` hero section to use `hero-abstract.png` with parallax.
    - [ ] Remove `Prism3D` component usage from Home.

- [ ] **Project Data**
    - [ ] Create `client/src/data/projects.ts` to store project data centrally.
    - [ ] Populate data with exact text extracted from screenshots (need to read text from images manually/visually).

- [ ] **Project Detail Page**
    - [ ] Create `client/src/pages/ProjectDetail.tsx`.
    - [ ] Implement routing in `App.tsx` for `/work/:id`.
    - [ ] Design detail page layout (Hero image, Title, Client, Description, Credits/Tags).

- [ ] **Work Page Update**
    - [ ] Update `Work.tsx` to use shared data from `projects.ts`.
    - [ ] Change project card click behavior to navigate to `/work/:id`.
