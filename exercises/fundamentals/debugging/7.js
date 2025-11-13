// Roles (salary still to be determined)

const ceo = {
  tasks: ['company strategy', 'resource allocation', 'performance monitoring'],
  salary: 0,
};

const developer = {
  tasks: ['turn product vision into code'],
  salary: 0,
};

const scrumMaster = {
  tasks: ['organize scrum process', 'manage scrum teams'],
  salary: 0,
};

// Team -- we're hiring!

const team = {};

team.ceo = 'Kim';              // This creates a property with value kim but name equal to a string representation of our `ceo` object i.e. '[object Object]'. To use 'ceo' as our key, use dot notation, or use bracket notation with quotes around the property name. Both are used here and below
team['scrumMaster'] = 'Alice';
team.developer = undefined;

const company = {
  name: 'Space Design',
  team,
  projectedRevenue: 500000,
};

console.log(`----{ ${company.name} }----`);
console.log(`CEO: ${company.team.ceo}`);     // Similarly here and line below, use either dot notation or bracket notation with quotes to access our team properties.
console.log(`Scrum master: ${company.team['scrumMaster']}`);
console.log(`Projected revenue: $${company.projectedRevenue}`);

// ----{ Space Design }----
// CEO: undefined
// Scrum master: undefined
// Projected revenue: $500000