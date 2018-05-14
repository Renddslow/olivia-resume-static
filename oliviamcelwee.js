const HIGHSCHOOL = 'highschool';
const SECONDARY = 'secondary';
const UPON_REQUEST = 'Contact information available upon request';

window.resume = {
	experience: {
		industry: [
			{
				company: 'Elkhorn High School',
				dates: '2018',
				titles: [
					{ title: 'Long-term Substitute - English' }
				],
				reportedTo: 'Mrs. Theresa Huber & Mr. Dan Radicia',
				description: ''
			},
			{
				company: 'Daniel Boone Middle School',
				dates: '2016',
				titles: [
					{ title: 'Student Teaching - 7th Grade English' }
				],
				reportedTo: 'Mrs. Beth Baker',
				description: ''
			},
			{
				company: 'Great Valley Middle School',
				dates: '2013, 2015',
				titles: [
					{ title: 'Field Experience - 7th Grade English' }
				],
				reportedTo: 'Ms. Christine Nystrom',
				description: ''
			},
		],
		other: [
			{
				company: 'Ulta Beauty',
				dates: '2017 - present',
				titles: [
					{
						title: 'Presitge Beauty Advisor',
						dates: 'Aug 2017 - Present'
					},
					{
						title: 'Beauty Advisor',
						dates: 'Apr 2017 - Aug 2017'
					}
				],
				description: ''
			},
			{
				company: 'The Wellness Pointe',
				dates: '2016',
				titles: [
					{ title: 'Outreach Coordinator' }
				],
				description: ''
			},
			{
				company: 'Cole Haan',
				dates: '2015 - 2016',
				titles: [
					{
						title: 'Holiday Key Holder',
						dates: 'Oct 2015 - Dec 2015'
					},
					{
						title: 'Sales Associate',
						dates: '2015 - 2016'
					}
				],
				description: ''
			},
			{
				company: 'Valley Forge Christian College',
				dates: '2011 - 2016',
				titles: [
					{ title: 'Office Manager & Student Orientation Coordinator' },
					{ title: 'Office Assistant' },
					{ title: 'Teacher\'s Aid' }
				],
				description: ''
			}
		],
		volunteer: [
			{
				organization: 'Flatland Church',
				dates: '2016 - Present',
				titles: [
					{ title: 'College Ministry Team Leader' }
				],
				description: ''
			},
			{
				organization: 'Glad Tidings',
				dates: '2015-2016',
				titles: [
					{ title: 'Youth Group Volunteer' }
				]
			},
			{
				organization: 'Victory Fellowship',
				dates: '2011-2013',
				titles: [
					{ title: 'Middle School Life Group Leader' }
				]
			}
		],
	},
	education: [
		{
			school: 'University of Valley Forge',
			dates: '2011 - 2016',
			degrees: [
				{
					type: 'Bachelor of Science',
					name: 'Secondary Education: English Concentration'
				},
				{
					type: 'Bachelor of Science',
					name: 'Middle-Level Education: English Concentration'
				}
			],
			type: SECONDARY
		},
		{
			school: 'North Dakota Center for Distance Education',
			dates: '2010 - 2011',
			type: HIGHSCHOOL
		},
		{
			school: 'Elkhorn High School',
			dates: '2008 - 2011',
			type: HIGHSCHOOL
		}
	],
	references: [
		{
			name: 'Amy Thurston',
			relationship: 'Employer & Mentor',
			contact: UPON_REQUEST
		},
		{
			name: 'Ian Thomas',
			relationship: 'Employer',
			contact: UPON_REQUEST
		},
		{
			name: 'Melanie Weaver',
			relationship: 'Professor & Mentor',
			contact: UPON_REQUEST
		},
		{
			name: 'Rachel Fagan',
			relationship: 'Employer',
			contact: UPON_REQUEST
		}
	],
	summary: 'My name is Olivia McElwee. I am an educator with a passion for language and literature. I love being able to inspire students to grow, learn, and mature through engaging lessons. By obtaining a double major, I feel equipped to address the different learning levels and abilities that I may encounter in my classroom. I enjoy learning as much as teaching. I am looking forward to continuing my education, as well as learning new and creative ways to engage students.'
};

