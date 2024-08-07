const people  = [
    {
      "id": 1,
      "name": "John Smith",
      "gender": "Male",
      "age": 30,
      "mobile": 9876543210,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": [
        "Construction Worker",
        "Plumber"
      ],
      "experience": 5,
      "rating": 4,
      "location": "Cityville",
      "email": "john.smith@example.com",
      "bio": "Hi I am ready to work at any construction site at badlapur. I can work from morning 7 am to 7 pm. I can do any other related job than the mentioned"
    },
    {
      "id": 2,
      "name": "Jane Doe",
      "gender": "Female",
      "age": 28,
      "mobile": 9876543211,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": [
        "Electrician"
      ],
      "experience": 7,
      "rating": 4.5,
      "location": "Ruralville",
      "email": "jane.doe@example.com",
      "bio": "Experienced electrician available for household and commercial wiring. Available on weekends."
    },
    {
      "id": 3,
      "name": "Michael Brown",
      "gender": "Male",
      "age": 35,
      "mobile": 9876543212,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": [
        "Carpenter"
      ],
      "experience": 10,
      "rating": 4.8,
      "location": "Suburbia",
      "email": "michael.brown@example.com",
      "bio": "Skilled carpenter with expertise in furniture making and construction projects. Available full-time."
    },
    {
      "id": 4,
      "name": "Emily Wilson",
      "gender": "Female",
      "age": 25,
      "mobile": 9876543213,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": [
        "Gardener",
        "Landscaper"
      ],
      "experience": 3,
      "rating": 4.2,
      "location": "Greenfields",
      "email": "emily.wilson@example.com",
      "bio": "Experienced in gardening and landscaping. Loves working with plants and outdoor projects."
    },
    {
      "id": 5,
      "name": "David Rodriguez",
      "gender": "Male",
      "age": 32,
      "mobile": 9876543214,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": [
        "Painter"
      ],
      "experience": 8,
      "rating": 4.6,
      "location": "Cityscape",
      "email": "david.rodriguez@example.com",
      "bio": "Professional painter with expertise in residential and commercial painting projects. Available weekdays."
    },
    {
      "id": 6,
      "name": "Sarah Johnson",
      "gender": "Female",
      "age": 27,
      "mobile": 9876543215,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": [
        "Mechanic"
      ],
      "experience": 6,
      "rating": 4.3,
      "location": "Mechanictown",
      "email": "sarah.johnson@example.com",
      "bio": "Experienced mechanic specializing in cars and small engine repair. Available for on-site repairs."
    },
    {
      "id": 7,
      "name": "James Wilson",
      "gender": "Male",
      "age": 33,
      "mobile": 9876543216,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": [
        "Plumber"
      ],
      "experience": 9,
      "rating": 4.7,
      "location": "Plumberville",
      "email": "james.wilson@example.com",
      "bio": "Expert plumber available for residential and commercial plumbing jobs. Emergency services available."
    },
    {
      "id": 8,
      "name": "Emma Davis",
      "gender": "Female",
      "age": 29,
      "mobile": 9876543217,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": [
        "Housekeeper",
        "Cleaner"
      ],
      "experience": 4,
      "rating": 4.1,
      "location": "Cleansville",
      "email": "emma.davis@example.com",
      "bio": "Experienced housekeeper with attention to detail. Available for residential and commercial cleaning services."
    },
    {
      "id": 9,
      "name": "Daniel Martinez",
      "gender": "Male",
      "age": 31,
      "mobile": 9876543218,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": [
        "Chef",
        "Cook"
      ],
      "experience": 7,
      "rating": 4.4,
      "location": "Culinarytown",
      "email": "daniel.martinez@example.com",
      "bio": "Professional chef with experience in fine dining and event catering. Available for private chef services."
    },
    {
      "id": 10,
      "name": "Olivia Brown",
      "gender": "Female",
      "age": 26,
      "mobile": 9876543219,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": [
        "Nurse",
        "Caregiver"
      ],
      "experience": 5,
      "rating": 4.5,
      "location": "Caretown",
      "email": "olivia.brown@example.com",
      "bio": "Qualified nurse with experience in elder care and medical assistance. Available for home care services."
    },
    {
      "id": 11,
      "name": "Noah Garcia",
      "gender": "Male",
      "age": 34,
      "mobile": 9876543220,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": [
        "Roofing Contractor"
      ],
      "experience": 8,
      "rating": 4.6,
      "location": "Roofcity",
      "email": "noah.garcia@example.com",
      "bio": "Experienced roofing contractor specializing in residential and commercial projects. Available for consultations and installations."
    },
    {
      "id": 12,
      "name": "Ava Taylor",
      "gender": "Female",
      "age": 30,
      "mobile": 9876543221,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": [
        "Plasterer"
      ],
      "experience": 6,
      "rating": 4.3,
      "location": "Plasterfield",
      "email": "ava.taylor@example.com",
      "bio": "Skilled plasterer with experience in interior and exterior plastering. Available for projects of any size."
    },
    {
      "id": 13,
      "name": "Ethan Anderson",
      "gender": "Male",
      "age": 29,
      "mobile": 9876543222,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": [
        "Welder"
      ],
      "experience": 7,
      "rating": 4.4,
      "location": "Weldertown",
      "email": "ethan.anderson@example.com",
      "bio": "Certified welder with expertise in structural and artistic welding. Available for custom projects."
    },
    {
      "id": 14,
      "name": "Isabella Moore",
      "gender": "Female",
      "age": 27,
      "mobile": 9876543223,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": [
        "Mason"
      ],
      "experience": 5,
      "rating": 4.2,
      "location": "Masonville",
      "email": "isabella.moore@example.com",
      "bio": "Experienced mason specializing in bricklaying and stone masonry. Available for residential and commercial projects."
    },
    {
      "id": 15,
      "name": "Mason Thompson",
      "gender": "Male",
      "age": 32,
      "mobile": 9876543224,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": [
        "HVAC Technician"
      ],
      "experience": 9,
      "rating": 4.7,
      "location": "HVACtown",
      "email": "mason.thompson@example.com",
      "bio": "Skilled HVAC technician with experience in heating, ventilation, and air conditioning systems. Available for installations and repairs."
    },
    {
      "id": 16,
      "name": "Chloe Garcia",
      "gender": "Female",
      "age": 31,
      "mobile": 9876543225,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": [
        "Bricklayer"
      ],
      "experience": 8,
      "rating": 4.6,
      "location": "Bricktown",
      "email": "chloe.garcia@example.com",
      "bio": "Experienced bricklayer specializing in residential and commercial projects. Available for new constructions and repairs."
    },
    {
      "id": 17,
      "name": "Luke Hernandez",
      "gender": "Male",
      "age": 28,
      "mobile": 9876543226,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": [
        "Cabinet Maker"
      ],
      "experience": 6,
      "rating": 4.4,
      "location": "Cabinettown",
      "email": "luke.hernandez@example.com",
      "bio": "Skilled cabinet maker with expertise in custom cabinetry and woodworking. Available for residential and commercial projects."
    },
    {
      "id": 18,
      "name": "Lily Martin",
      "gender": "Female",
      "age": 29,
      "mobile": 9876543227,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": [
        "Tiler"
      ],
      "experience": 5,
      "rating": 4.2,
      "location": "Tiletown",
      "email": "lily.martin@example.com",
      "bio": "Experienced tiler with skills in ceramic and stone tiling. Available for kitchen and bathroom renovations."
    },
    {
      "id": 19,
      "name": "Jack Adams",
      "gender": "Male",
      "age": 30,
      "mobile": 9876543228,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": [
        "Scaffolder"
      ],
      "experience": 7,
      "rating": 4.5,
      "location": "Scaffoldingtown",
      "email": "jack.adams@example.com",
      "bio": "Experienced scaffolder with expertise in safe and efficient scaffold setups. Available for construction projects."
    },
    {
      "id": 20,
      "name": "Sophia Hill",
      "gender": "Female",
      "age": 27,
      "mobile": 9876543229,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": [
        "Flooring Installer"
      ],
      "experience": 6,
      "rating": 4.3,
      "location": "Floortown",
      "email": "sophia.hill@example.com",
      "bio": "Professional flooring installer with experience in hardwood, laminate, and tile installations. Available for residential and commercial projects."
    },
    {
      "id": 21,
      "name": "Logan Young",
      "gender": "Male",
      "age": 32,
      "mobile": 9876543230,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": [
        "Fence Installer"
      ],
      "experience": 8,
      "rating": 4.6,
      "location": "Fencetown",
      "email": "logan.young@example.com",
      "bio": "Experienced fence installer specializing in residential and commercial fencing. Available for custom designs and installations."
    },
    {
      "id": 22,
      "name": "Avery Lewis",
      "gender": "Female",
      "age": 28,
      "mobile": 9876543231,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": [
        "Roofer"
      ],
      "experience": 6,
      "rating": 4.4,
      "location": "Roofertown",
      "email": "avery.lewis@example.com",
      "bio": "Skilled roofer with expertise in residential and commercial roofing projects. Available for repairs and new installations."
    },
    {
      "id": 23,
      "name": "Jackson Carter",
      "gender": "Male",
      "age": 29,
      "mobile": 9876543232,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": [
        "Drywaller"
      ],
      "experience": 7,
      "rating": 4.5,
      "location": "Drywalltown",
      "email": "jackson.carter@example.com",
      "bio": "Experienced drywaller specializing in interior finishes. Available for residential and commercial projects."
    },
    {
      "id": 24,
      "name": "Ella Perez",
      "gender": "Female",
      "age": 30,
      "mobile": 9876543233,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": [
        "Assembler"
      ],
      "experience": 5,
      "rating": 4.3,
      "location": "Assemblytown",
      "email": "ella.perez@example.com",
      "bio": "Skilled assembler with experience in manufacturing and production lines. Available for assembly and packaging projects."
    },
    {
      "id": 25,
      "name": "Grayson Wright",
      "gender": "Male",
      "age": 31,
      "mobile": 9876543234,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": [
        "Truck Driver"
      ],
      "experience": 8,
      "rating": 4.6,
      "location": "Trucktown",
      "email": "grayson.wright@example.com",
      "bio": "Experienced truck driver with a clean driving record. Available for local and long-distance deliveries."
    },
    {
      "id": 26,
      "name": "Scarlett King",
      "gender": "Female",
      "age": 29,
      "mobile": 9876543235,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": [
        "Janitor"
      ],
      "experience": 6,
      "rating": 4.4,
      "location": "Cleantown",
      "email": "scarlett.king@example.com",
      "bio": "Professional janitor with expertise in commercial cleaning. Available for daily cleaning services."
    },
    {
      "id": 27,
      "name": "Owen Foster",
      "gender": "Male",
      "age": 30,
      "mobile": 9876543236,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": [
        "Landscaper"
      ],
      "experience": 7,
      "rating": 4.5,
      "location": "Landscapertown",
      "email": "owen.foster@example.com",
      "bio": "Experienced landscaper with skills in lawn care and garden maintenance. Available for residential and commercial properties."
    },
    {
      "id": 28,
      "name": "Hannah Wood",
      "gender": "Female",
      "age": 28,
      "mobile": 9876543237,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": [
        "Farm Worker"
      ],
      "experience": 6,
      "rating": 4.4,
      "location": "Farmtown",
      "email": "hannah.wood@example.com",
      "bio": "Hardworking farm worker with experience in crop harvesting and animal care. Available for seasonal farm work."
    },
    {
      "id": 29,
      "name": "Liam Hall",
      "gender": "Male",
      "age": 32,
      "mobile": 9876543238,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": [
        "Plumber"
      ],
      "experience": 9,
      "rating": 4.7,
      "location": "Plumbertown",
      "email": "liam.hall@example.com",
      "bio": "Expert plumber available for residential and commercial plumbing jobs. Emergency services available."
    },
    {
      "id": 30,
      "name": "Mia Bell",
      "gender": "Female",
      "age": 27,
      "mobile": 9876543239,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": [
        "Painter"
      ],
      "experience": 8,
      "rating": 4.6,
      "location": "Paintertown",
      "email": "mia.bell@example.com",
      "bio": "Professional painter with expertise in residential and commercial painting projects. Available weekdays."
    },
    {
      "id": 31,
      "name": "Elijah White",
      "gender": "Male",
      "age": 33,
      "mobile": 9876543240,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": [
        "Carpenter"
      ],
      "experience": 10,
      "rating": 4.8,
      "location": "Woodtown",
      "email": "elijah.white@example.com",
      "bio": "Experienced carpenter specializing in custom furniture and cabinetry. Available for residential and commercial projects."
    },
    {
      "id": 32,
      "name": "Sophie Reed",
      "gender": "Female",
      "age": 29,
      "mobile": 9876543241,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": [
        "Gardener",
        "Landscaper"
      ],
      "experience": 6,
      "rating": 4.4,
      "location": "Greentown",
      "email": "sophie.reed@example.com",
      "bio": "Skilled gardener with expertise in landscaping and plant care. Available for garden design and maintenance."
    },
    {
      "id": 33,
      "name": "Lucas King",
      "gender": "Male",
      "age": 31,
      "mobile": 9876543242,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": [
        "Electrician"
      ],
      "experience": 8,
      "rating": 4.6,
      "location": "Electrictown",
      "email": "lucas.king@example.com",
      "bio": "Certified electrician with experience in residential and commercial wiring. Available for electrical installations and repairs."
    },
    {
      "id": 34,
      "name": "Ava Cooper",
      "gender": "Female",
      "age": 28,
      "mobile": 9876543243,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": [
        "Painter"
      ],
      "experience": 7,
      "rating": 4.5,
      "location": "Painttown",
      "email": "ava.cooper@example.com",
      "bio": "Professional painter specializing in interior and exterior painting. Available for residential and commercial projects."
    },
    {
      "id": 35,
      "name": "Oliver Taylor",
      "gender": "Male",
      "age": 30,
      "mobile": 9876543244,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": [
        "Mechanic"
      ],
      "experience": 9,
      "rating": 4.7,
      "location": "Mechanictown",
      "email": "oliver.taylor@example.com",
      "bio": "Experienced mechanic with skills in automotive repair and maintenance. Available for on-site repairs."
    },
    {
      "id": 36,
      "name": "Emma Hill",
      "gender": "Female",
      "age": 27,
      "mobile": 9876543245,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": [
        "Plumber"
      ],
      "experience": 6,
      "rating": 4.3,
      "location": "Plumbertown",
      "email": "emma.hill@example.com",
      "bio": "Skilled plumber with experience in residential and commercial plumbing installations. Available for emergencies."
    },
    {
      "id": 37,
      "name": "Liam Davis",
      "gender": "Male",
      "age": 32,
      "mobile": 9876543246,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": [
        "HVAC Technician"
      ],
      "experience": 8,
      "rating": 4.6,
      "location": "HVACtown",
      "email": "liam.davis@example.com",
      "bio": "Professional HVAC technician with expertise in heating, ventilation, and air conditioning systems. Available for installations and repairs."
    },
    {
      "id": 38,
      "name": "Charlotte Martinez",
      "gender": "Female",
      "age": 29,
      "mobile": 9876543247,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": [
        "Chef",
        "Cook"
      ],
      "experience": 7,
      "rating": 4.5,
      "location": "Cheftown",
      "email": "charlotte.martinez@example.com",
      "bio": "Experienced chef with a passion for culinary arts. Available for private chef services and event catering."
    },
    {
      "id": 39,
      "name": "Grace Walker",
      "gender": "Female",
      "age": 26,
      "mobile": 9876543248,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": [
        "Nurse",
        "Caregiver"
      ],
      "experience": 5,
      "rating": 4.4,
      "location": "Caregivertown",
      "email": "grace.walker@example.com",
      "bio": "Qualified nurse with experience in home healthcare. Available for elderly care and medical assistance."
    },
    {
      "id": 40,
      "name": "Jacob White",
      "gender": "Male",
      "age": 34,
      "mobile": 9876543249,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": [
        "Roofing Contractor"
      ],
      "experience": 8,
      "rating": 4.6,
      "location": "Rooftown",
      "email": "jacob.white@example.com",
      "bio": "Experienced roofing contractor specializing in residential and commercial roofing projects. Available for consultations and installations."
    },
    {
      "id": 41,
      "name": "Ella Parker",
      "gender": "Female",
      "age": 30,
      "mobile": 9876543250,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": [
        "Plasterer"
      ],
      "experience": 6,
      "rating": 4.4,
      "location": "Plastertown",
      "email": "ella.parker@example.com",
      "bio": "Skilled plasterer with experience in interior and exterior plastering. Available for residential and commercial projects."
    },
    {
      "id": 42,
      "name": "William Lopez",
      "gender": "Male",
      "age": 29,
      "mobile": 9876543251,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": [
        "Welder"
      ],
      "experience": 7,
      "rating": 4.5,
      "location": "Weldertown",
      "email": "william.lopez@example.com",
      "bio": "Certified welder with expertise in structural and artistic welding. Available for custom projects."
    },
    {
      "id": 43,
      "name": "Sophia Clark",
      "gender": "Female",
      "age": 28,
      "mobile": 9876543252,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": [
        "Bricklayer"
      ],
      "experience": 6,
      "rating": 4.3,
      "location": "Bricktown",
      "email": "sophia.clark@example.com",
      "bio": "Experienced bricklayer specializing in residential and commercial projects. Available for new constructions and repairs."
    },
    {
      "id": 44,
      "name": "Noah Lewis",
      "gender": "Male",
      "age": 31,
      "mobile": 9876543253,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": [
        "Plumber"
      ],
      "experience": 8,
      "rating": 4.6,
      "location": "Plumbertown",
      "email": "noah.lewis@example.com",
      "bio": "Expert plumber available for residential and commercial plumbing jobs. Emergency services available."
    },
    {
      "id": 45,
      "name": "Aria Martinez",
      "gender": "Female",
      "age": 29,
      "mobile": 9876543254,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": [
        "HVAC Technician"
      ],
      "experience": 7,
      "rating": 4.5,
      "location": "HVACtown",
      "email": "aria.martinez@example.com",
      "bio": "Skilled HVAC technician with experience in heating, ventilation, and air conditioning systems. Available for installations and repairs."
    },
    {
      "id": 46,
      "name": "Mason Walker",
      "gender": "Male",
      "age": 30,
      "mobile": 9876543255,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": [
        "Bricklayer"
      ],
      "experience": 8,
      "rating": 4.6,
      "location": "Bricktown",
      "email": "mason.walker@example.com",
      "bio": "Experienced bricklayer specializing in residential and commercial projects. Available for new constructions and repairs."
    },
    {
      "id": 47,
      "name": "Charlotte Perez",
      "gender": "Female",
      "age": 28,
      "mobile": 9876543256,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": [
        "Electrician"
      ],
      "experience": 6,
      "rating": 4.4,
      "location": "Electrictown",
      "email": "charlotte.perez@example.com",
      "bio": "Certified electrician with experience in residential and commercial wiring. Available for electrical installations and repairs."
    },
    {
      "id": 48,
      "name": "James Garcia",
      "gender": "Male",
      "age": 29,
      "mobile": 9876543257,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": [
        "Plumber"
      ],
      "experience": 7,
      "rating": 4.4,
      "location": "Plumbertown",
      "email": "james.garcia@example.com",
      "bio": "Expert plumber available for residential and commercial plumbing jobs. Emergency services available."
    },
    {
      "id": 49,
      "name": "Olivia Miller",
      "gender": "Female",
      "age": 26,
      "mobile": 9876543258,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": [
        "Painter"
      ],
      "experience": 5,
      "rating": 4.3,
      "location": "Paintertown",
      "email": "olivia.miller@example.com",
      "bio": "Professional painter with expertise in residential and commercial painting projects. Available weekdays."
    },
    {
      "id": 50,
      "name": "Lucas Martin",
      "gender": "Male",
      "age": 33,
      "mobile": 9876543259,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": [
        "Mechanic"
      ],
      "experience": 10,
      "rating": 4.8,
      "location": "Mechanictown",
      "email": "lucas.martin@example.com",
      "bio": "Experienced mechanic with skills in automotive repair and maintenance. Available for on-site repairs."
    },
    {
      "id": 51,
      "name": "Ella Wilson",
      "gender": "Female",
      "age": 27,
      "mobile": 9876543260,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": [
        "Chef",
        "Cook"
      ],
      "experience": 6,
      "rating": 4.4,
      "location": "Cheftown",
      "email": "ella.wilson@example.com",
      "bio": "Experienced chef with a passion for culinary arts. Available for private chef services and event catering."
    },
    {
      "id": 52,
      "name": "Henry Thompson",
      "gender": "Male",
      "age": 34,
      "mobile": 9876543261,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": [
        "Roofer"
      ],
      "experience": 8,
      "rating": 4.6,
      "location": "Rooftown",
      "email": "henry.thompson@example.com",
      "bio": "Experienced roofing contractor specializing in residential and commercial roofing projects. Available for consultations and installations."
    },
    {
      "id": 53,
      "name": "Emily Lewis",
      "gender": "Female",
      "age": 30,
      "mobile": 9876543262,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": [
        "Plasterer"
      ],
      "experience": 7,
      "rating": 4.5,
      "location": "Plastertown",
      "email": "emily.lewis@example.com",
      "bio": "Skilled plasterer with experience in interior and exterior plastering. Available for residential and commercial projects."
    },
    {
      "id": 54,
      "name": "William Davis",
      "gender": "Male",
      "age": 31,
      "mobile": 9876543263,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": [
        "Welder"
      ],
      "experience": 8,
      "rating": 4.6,
      "location": "Weldertown",
      "email": "william.davis@example.com",
      "bio": "Certified welder with expertise in structural and artistic welding. Available for custom projects."
    },
    {
      "id": 55,
      "name": "Amelia Clark",
      "gender": "Female",
      "age": 32,
      "mobile": 9876543264,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": [
        "Bricklayer"
      ],
      "experience": 9,
      "rating": 4.7,
      "location": "Bricktown",
      "email": "amelia.clark@example.com",
      "bio": "Experienced bricklayer specializing in residential and commercial projects. Available for new constructions and repairs."
    },
    {
      "id": 56,
      "name": "Ethan Baker",
      "gender": "Male",
      "age": 29,
      "mobile": 9876543265,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": [
        "Electrician"
      ],
      "experience": 7,
      "rating": 4.5,
      "location": "Electrictown",
      "email": "ethan.baker@example.com",
      "bio": "Certified electrician with experience in residential and commercial wiring. Available for electrical installations and repairs."
    },
    {
      "id": 57,
      "name": "Isabella Scott",
      "gender": "Female",
      "age": 28,
      "mobile": 9876543266,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": [
        "HVAC Technician"
      ],
      "experience": 6,
      "rating": 4.4,
      "location": "HVACtown",
      "email": "isabella.scott@example.com",
      "bio": "Skilled HVAC technician with experience in heating, ventilation, and air conditioning systems. Available for installations and repairs."
    },
    {
      "id": 58,
      "name": "Alexander Perez",
      "gender": "Male",
      "age": 27,
      "mobile": 9876543267,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": [
        "Plumber"
      ],
      "experience": 5,
      "rating": 4.3,
      "location": "Plumbertown",
      "email": "alexander.perez@example.com",
      "bio": "Skilled plumber with experience in residential and commercial plumbing installations. Available for emergencies."
    },
    {
      "id": 59,
      "name": "Madison Gonzalez",
      "gender": "Female",
      "age": 26,
      "mobile": 9876543268,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": [
        "Painter"
      ],
      "experience": 4,
      "rating": 4.2,
      "location": "Paintertown",
      "email": "madison.gonzalez@example.com",
      "bio": "Professional painter with expertise in residential and commercial painting projects. Available weekdays."
    },
    {
      "id": 60,
      "name": "Jackson Wilson",
      "gender": "Male",
      "age": 35,
      "mobile": 9876543269,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": [
        "Mechanic"
      ],
      "experience": 11,
      "rating": 4.9,
      "location": "Mechanictown",
      "email": "jackson.wilson@example.com",
      "bio": "Experienced mechanic with skills in automotive repair and maintenance. Available for on-site repairs."
    },
    {
      "id": 61,
      "name": "Lily Moore",
      "gender": "Female",
      "age": 27,
      "mobile": 9876543270,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": ["Carpenter"],
      "experience": 6,
      "rating": 4.4,
      "location": "Woodtown",
      "email": "lily.moore@example.com",
      "bio": "Skilled carpenter with experience in custom furniture and cabinetry. Available for residential and commercial projects."
    },
    {
      "id": 62,
      "name": "Sebastian Hill",
      "gender": "Male",
      "age": 32,
      "mobile": 9876543271,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": ["Gardener", "Landscaper"],
      "experience": 8,
      "rating": 4.6,
      "location": "Greentown",
      "email": "sebastian.hill@example.com",
      "bio": "Experienced gardener with expertise in landscaping and plant care. Available for garden design and maintenance."
    },
    {
      "id": 63,
      "name": "Isaac Rivera",
      "gender": "Male",
      "age": 30,
      "mobile": 9876543272,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": ["Electrician"],
      "experience": 7,
      "rating": 4.5,
      "location": "Electrictown",
      "email": "isaac.rivera@example.com",
      "bio": "Certified electrician with experience in residential and commercial wiring. Available for electrical installations and repairs."
    },
    {
      "id": 64,
      "name": "Mia Carter",
      "gender": "Female",
      "age": 28,
      "mobile": 9876543273,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": ["Painter"],
      "experience": 6,
      "rating": 4.3,
      "location": "Painttown",
      "email": "mia.carter@example.com",
      "bio": "Professional painter specializing in interior and exterior painting. Available for residential and commercial projects."
    },
    {
      "id": 65,
      "name": "Owen Scott",
      "gender": "Male",
      "age": 29,
      "mobile": 9876543274,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": ["Mechanic"],
      "experience": 8,
      "rating": 4.6,
      "location": "Mechanictown",
      "email": "owen.scott@example.com",
      "bio": "Experienced mechanic with skills in automotive repair and maintenance. Available for on-site repairs."
    },
    {
      "id": 66,
      "name": "Chloe Rodriguez",
      "gender": "Female",
      "age": 27,
      "mobile": 9876543275,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": ["Plumber"],
      "experience": 6,
      "rating": 4.4,
      "location": "Plumbertown",
      "email": "chloe.rodriguez@example.com",
      "bio": "Skilled plumber with experience in residential and commercial plumbing installations. Available for emergencies."
    },
    {
      "id": 67,
      "name": "Ethan Adams",
      "gender": "Male",
      "age": 31,
      "mobile": 9876543276,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": ["HVAC Technician"],
      "experience": 7,
      "rating": 4.5,
      "location": "HVACtown",
      "email": "ethan.adams@example.com",
      "bio": "Professional HVAC technician with expertise in heating, ventilation, and air conditioning systems. Available for installations and repairs."
    },
    {
      "id": 68,
      "name": "Scarlett Stewart",
      "gender": "Female",
      "age": 28,
      "mobile": 9876543277,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": ["Chef", "Cook"],
      "experience": 6,
      "rating": 4.4,
      "location": "Cheftown",
      "email": "scarlett.stewart@example.com",
      "bio": "Experienced chef with a passion for culinary arts. Available for private chef services and event catering."
    },
    {
      "id": 69,
      "name": "Jackie Turner",
      "gender": "Female",
      "age": 26,
      "mobile": 9876543278,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": ["Nurse", "Caregiver"],
      "experience": 5,
      "rating": 4.3,
      "location": "Caregivertown",
      "email": "jackie.turner@example.com",
      "bio": "Qualified nurse with experience in home healthcare. Available for elderly care and medical assistance."
    },
    {
      "id": 70,
      "name": "Daniel Hill",
      "gender": "Male",
      "age": 33,
      "mobile": 9876543279,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": ["Roofing Contractor"],
      "experience": 9,
      "rating": 4.7,
      "location": "Rooftown",
      "email": "daniel.hill@example.com",
      "bio": "Experienced roofing contractor specializing in residential and commercial roofing projects. Available for consultations and installations."
    },
    {
      "id": 71,
      "name": "Eva Green",
      "gender": "Female",
      "age": 29,
      "mobile": 9876543280,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": ["Plasterer"],
      "experience": 7,
      "rating": 4.5,
      "location": "Plastertown",
      "email": "eva.green@example.com",
      "bio": "Skilled plasterer with experience in interior and exterior plastering. Available for residential and commercial projects."
    },
    {
      "id": 72,
      "name": "Logan Martinez",
      "gender": "Male",
      "age": 30,
      "mobile": 9876543281,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": ["Welder"],
      "experience": 8,
      "rating": 4.6,
      "location": "Weldertown",
      "email": "logan.martinez@example.com",
      "bio": "Certified welder with expertise in structural and artistic welding. Available for custom projects."
    },
    {
      "id": 73,
      "name": "Avery Phillips",
      "gender": "Female",
      "age": 31,
      "mobile": 9876543282,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": ["Bricklayer"],
      "experience": 8,
      "rating": 4.6,
      "location": "Bricktown",
      "email": "avery.phillips@example.com",
      "bio": "Experienced bricklayer specializing in residential and commercial projects. Available for new constructions and repairs."
    },
    {
      "id": 74,
      "name": "Riley King",
      "gender": "Male",
      "age": 32,
      "mobile": 9876543283,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": ["Electrician"],
      "experience": 9,
      "rating": 4.7,
      "location": "Electrictown",
      "email": "riley.king@example.com",
      "bio": "Certified electrician with experience in residential and commercial wiring. Available for electrical installations and repairs."
    },
    {
      "id": 75,
      "name": "Skylar Scott",
      "gender": "Female",
      "age": 30,
      "mobile": 9876543284,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": ["Plumber"],
      "experience": 7,
      "rating": 4.6,
      "location": "Plumbertown",
      "email": "skylar.scott@example.com",
      "bio": "Skilled plumber with experience in residential and commercial plumbing installations. Available for emergencies."
    },
    {
      "id": 76,
      "name": "Emma Turner",
      "gender": "Female",
      "age": 28,
      "mobile": 9876543285,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": ["HVAC Technician"],
      "experience": 6,
      "rating": 4.5,
      "location": "HVACtown",
      "email": "emma.turner@example.com",
      "bio": "Professional HVAC technician with expertise in heating, ventilation, and air conditioning systems. Available for installations and repairs."
    },
    {
      "id": 77,
      "name": "Grace White",
      "gender": "Female",
      "age": 27,
      "mobile": 9876543286,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": ["Chef", "Cook"],
      "experience": 5,
      "rating": 4.3,
      "location": "Cheftown",
      "email": "grace.white@example.com",
      "bio": "Experienced chef with a passion for culinary arts. Available for private chef services and event catering."
    },
    {
      "id": 78,
      "name": "Noah Walker",
      "gender": "Male",
      "age": 29,
      "mobile": 9876543287,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": ["Mechanic"],
      "experience": 7,
      "rating": 4.4,
      "location": "Mechanictown",
      "email": "noah.walker@example.com",
      "bio": "Experienced mechanic with skills in automotive repair and maintenance. Available for on-site repairs."
    },
    {
      "id": 79,
      "name": "Aria Harris",
      "gender": "Female",
      "age": 26,
      "mobile": 9876543288,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": ["Nurse", "Caregiver"],
      "experience": 4,
      "rating": 4.2,
      "location": "Caregivertown",
      "email": "aria.harris@example.com",
      "bio": "Qualified nurse with experience in home healthcare. Available for elderly care and medical assistance."
    },
    {
      "id": 80,
      "name": "James Green",
      "gender": "Male",
      "age": 34,
      "mobile": 9876543289,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": ["Roofing Contractor"],
      "experience": 8,
      "rating": 4.6,
      "location": "Rooftown",
      "email": "james.green@example.com",
      "bio": "Experienced roofing contractor specializing in residential and commercial roofing projects. Available for consultations and installations."
    },
    {
      "id": 81,
      "name": "Sophia King",
      "gender": "Female",
      "age": 27,
      "mobile": 9876543290,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": ["Plasterer"],
      "experience": 6,
      "rating": 4.4,
      "location": "Plastertown",
      "email": "sophia.king@example.com",
      "bio": "Skilled plasterer with experience in interior and exterior plastering. Available for residential and commercial projects."
    },
    {
      "id": 82,
      "name": "Elijah Wright",
      "gender": "Male",
      "age": 35,
      "mobile": 9876543291,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": ["Welder"],
      "experience": 9,
      "rating": 4.7,
      "location": "Weldertown",
      "email": "elijah.wright@example.com",
      "bio": "Certified welder with expertise in structural and artistic welding. Available for custom projects."
    },
    {
      "id": 83,
      "name": "Hannah Baker",
      "gender": "Female",
      "age": 28,
      "mobile": 9876543292,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": ["Bricklayer"],
      "experience": 7,
      "rating": 4.5,
      "location": "Bricktown",
      "email": "hannah.baker@example.com",
      "bio": "Experienced bricklayer specializing in residential and commercial projects. Available for new constructions and repairs."
    },
    {
      "id": 84,
      "name": "Liam Nelson",
      "gender": "Male",
      "age": 29,
      "mobile": 9876543293,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": ["Electrician"],
      "experience": 6,
      "rating": 4.4,
      "location": "Electrictown",
      "email": "liam.nelson@example.com",
      "bio": "Certified electrician with experience in residential and commercial wiring. Available for electrical installations and repairs."
    },
    {
      "id": 85,
      "name": "Ava Turner",
      "gender": "Female",
      "age": 30,
      "mobile": 9876543294,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": ["Plumber"],
      "experience": 5,
      "rating": 4.3,
      "location": "Plumbertown",
      "email": "ava.turner@example.com",
      "bio": "Skilled plumber with experience in residential and commercial plumbing installations. Available for emergencies."
    },
    {
      "id": 86,
      "name": "Olivia Martinez",
      "gender": "Female",
      "age": 31,
      "mobile": 9876543295,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": ["HVAC Technician"],
      "experience": 7,
      "rating": 4.5,
      "location": "HVACtown",
      "email": "olivia.martinez@example.com",
      "bio": "Professional HVAC technician with expertise in heating, ventilation, and air conditioning systems. Available for installations and repairs."
    },
    {
      "id": 87,
      "name": "Lucas Rodriguez",
      "gender": "Male",
      "age": 32,
      "mobile": 9876543296,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": ["Chef", "Cook"],
      "experience": 8,
      "rating": 4.6,
      "location": "Cheftown",
      "email": "lucas.rodriguez@example.com",
      "bio": "Experienced chef with a passion for culinary arts. Available for private chef services and event catering."
    },
    {
      "id": 88,
      "name": "Layla Turner",
      "gender": "Female",
      "age": 33,
      "mobile": 9876543297,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": ["Nurse", "Caregiver"],
      "experience": 9,
      "rating": 4.7,
      "location": "Caregivertown",
      "email": "layla.turner@example.com",
      "bio": "Qualified nurse with experience in home healthcare. Available for elderly care and medical assistance."
    },
    {
      "id": 89,
      "name": "Mason Hill",
      "gender": "Male",
      "age": 34,
      "mobile": 9876543298,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": ["Roofing Contractor"],
      "experience": 10,
      "rating": 4.8,
      "location": "Rooftown",
      "email": "mason.hill@example.com",
      "bio": "Experienced roofing contractor specializing in residential and commercial roofing projects. Available for consultations and installations."
    },
    {
      "id": 90,
      "name": "Harper Stewart",
      "gender": "Female",
      "age": 29,
      "mobile": 9876543299,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": ["Plasterer"],
      "experience": 6,
      "rating": 4.4,
      "location": "Plastertown",
      "email": "harper.stewart@example.com",
      "bio": "Skilled plasterer with experience in interior and exterior plastering. Available for residential and commercial projects."
    },
    {
      "id": 91,
      "name": "Eli Adams",
      "gender": "Male",
      "age": 35,
      "mobile": 9876543300,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": ["Welder"],
      "experience": 10,
      "rating": 4.8,
      "location": "Weldertown",
      "email": "eli.adams@example.com",
      "bio": "Certified welder with expertise in structural and artistic welding. Available for custom projects."
    },
    {
      "id": 92,
      "name": "Aubrey Baker",
      "gender": "Female",
      "age": 30,
      "mobile": 9876543301,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": ["Bricklayer"],
      "experience": 7,
      "rating": 4.5,
      "location": "Bricktown",
      "email": "aubrey.baker@example.com",
      "bio": "Experienced bricklayer specializing in residential and commercial projects. Available for new constructions and repairs."
    },
    {
      "id": 93,
      "name": "Gabriel Hill",
      "gender": "Male",
      "age": 31,
      "mobile": 9876543302,
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
      "interest": ["Electrician"],
      "experience": 8,
      "rating": 4.6,
      "location": "Electrictown",
      "email": "gabriel.hill@example.com",
      "bio": "Certified electrician with experience in residential and commercial wiring. Available for electrical installations and repairs."
    }
  ]

const jobs = [
    {
      "id": 1,
      "employer": "Chinmay Mahajan",
      "gender": "Male",
      "aboveAge": 18,
      "belowAge": 28,
      "mobile": 9021669772,
      "photo": "https://i.pinimg.com/736x/b4/b9/aa/b4b9aac0fd4a6efd448db56874b15326.jpg",
      "interest": [
        "BrickLayer",
        "Electrician",
        "plumber"
      ],
      "experience": 8,
      "Rating": 5,
      "salary": 2000,
      "unit": "per day",
      "location": "Badlapur",
      "email": "chinmay.mahajan@example.com",
      "workingTime": "9:00 AM to 5:00 PM"
    },
    {
      "id": 2,
      "employer": "Aarav Patil",
      "gender": "Male",
      "aboveAge": 19,
      "belowAge": 29,
      "mobile": 9021669773,
      "photo": "https://i.pinimg.com/736x/b4/b9/aa/b4b9aac0fd4a6efd448db56874b15326.jpg",
      "interest": [
        "Painter",
        "Mason"
      ],
      "experience": 7,
      "Rating": 4.5,
      "salary": 1800,
      "unit": "per day",
      "location": "Mumbai",
      "email": "aarav.patil@example.com",
      "workingTime": "8:00 AM to 4:00 PM"
    },
    {
      "id": 3,
      "employer": "Sana Sheikh",
      "gender": "Female",
      "aboveAge": 20,
      "belowAge": 30,
      "mobile": 9021669774,
      "photo": "https://i.pinimg.com/736x/b4/b9/aa/b4b9aac0fd4a6efd448db56874b15326.jpg",
      "interest": [
        "Electrician",
        "Plumber"
      ],
      "experience": 6,
      "Rating": 4.3,
      "salary": 1700,
      "unit": "per day",
      "location": "Pune",
      "email": "sana.sheikh@example.com",
      "workingTime": "9:00 AM to 5:00 PM"
    },
    {
      "id": 4,
      "employer": "Ravi Deshmukh",
      "gender": "Male",
      "aboveAge": 22,
      "belowAge": 32,
      "mobile": 9021669775,
      "photo": "https://i.pinimg.com/736x/b4/b9/aa/b4b9aac0fd4a6efd448db56874b15326.jpg",
      "interest": [
        "Carpenter",
        "Painter"
      ],
      "experience": 5,
      "Rating": 4,
      "salary": 1600,
      "unit": "per day",
      "location": "Nagpur",
      "email": "ravi.deshmukh@example.com",
      "workingTime": "7:00 AM to 3:00 PM"
    },
    {
      "id": 5,
      "employer": "Meera Iyer",
      "gender": "Female",
      "aboveAge": 21,
      "belowAge": 31,
      "mobile": 9021669776,
      "photo": "https://i.pinimg.com/736x/b4/b9/aa/b4b9aac0fd4a6efd448db56874b15326.jpg",
      "interest": [
        "Welder",
        "Mechanic"
      ],
      "experience": 8,
      "Rating": 4.7,
      "salary": 2000,
      "unit": "per day",
      "location": "Kolhapur",
      "email": "meera.iyer@example.com",
      "workingTime": "9:00 AM to 5:00 PM"
    },
    {
      "id": 6,
      "employer": "Rajesh Kumar",
      "gender": "Male",
      "aboveAge": 23,
      "belowAge": 33,
      "mobile": 9021669777,
      "photo": "https://i.pinimg.com/736x/b4/b9/aa/b4b9aac0fd4a6efd448db56874b15326.jpg",
      "interest": [
        "BrickLayer",
        "Electrician"
      ],
      "experience": 6,
      "Rating": 4.1,
      "salary": 1800,
      "unit": "per day",
      "location": "Nashik",
      "email": "rajesh.kumar@example.com",
      "workingTime": "8:00 AM to 4:00 PM"
    },
    {
      "id": 7,
      "employer": "Priya Sharma",
      "gender": "Female",
      "aboveAge": 20,
      "belowAge": 30,
      "mobile": 9021669778,
      "photo": "https://i.pinimg.com/736x/b4/b9/aa/b4b9aac0fd4a6efd448db56874b15326.jpg",
      "interest": [
        "Plumber",
        "Painter"
      ],
      "experience": 7,
      "Rating": 4.5,
      "salary": 1750,
      "unit": "per day",
      "location": "Thane",
      "email": "priya.sharma@example.com",
      "workingTime": "7:00 AM to 3:00 PM"
    },
    {
      "id": 8,
      "employer": "Amit Patel",
      "gender": "Male",
      "aboveAge": 21,
      "belowAge": 31,
      "mobile": 9021669779,
      "photo": "https://i.pinimg.com/736x/b4/b9/aa/b4b9aac0fd4a6efd448db56874b15326.jpg",
      "interest": [
        "Electrician",
        "Carpenter"
      ],
      "experience": 6,
      "Rating": 4.2,
      "salary": 1650,
      "unit": "per day",
      "location": "Aurangabad",
      "email": "amit.patel@example.com",
      "workingTime": "9:00 AM to 5:00 PM"
    },
    {
      "id": 9,
      "employer": "Anjali Nair",
      "gender": "Female",
      "aboveAge": 19,
      "belowAge": 29,
      "mobile": 9021669780,
      "photo": "https://i.pinimg.com/736x/b4/b9/aa/b4b9aac0fd4a6efd448db56874b15326.jpg",
      "interest": [
        "Mason",
        "Painter"
      ],
      "experience": 5,
      "Rating": 4,
      "salary": 1600,
      "unit": "per day",
      "location": "Satara",
      "email": "anjali.nair@example.com",
      "workingTime": "8:00 AM to 4:00 PM"
    },
    {
      "id": 10,
      "employer": "Vijay Rao",
      "gender": "Male",
      "aboveAge": 22,
      "belowAge": 32,
      "mobile": 9021669781,
      "photo": "https://i.pinimg.com/736x/b4/b9/aa/b4b9aac0fd4a6efd448db56874b15326.jpg",
      "interest": [
        "Welder",
        "Mechanic"
      ],
      "experience": 8,
      "Rating": 4.7,
      "salary": 2000,
      "unit": "per day",
      "location": "Amravati",
      "email": "vijay.rao@example.com",
      "workingTime": "7:00 AM to 3:00 PM"
    },
    {
      "id": 11,
      "employer": "Pooja Singh",
      "gender": "Female",
      "aboveAge": 20,
      "belowAge": 30,
      "mobile": 9021669782,
      "photo": "https://i.pinimg.com/736x/b4/b9/aa/b4b9aac0fd4a6efd448db56874b15326.jpg",
      "interest": [
        "BrickLayer",
        "Electrician"
      ],
      "experience": 6,
      "Rating": 4.1,
      "salary": 1700,
      "unit": "per day",
      "location": "Solapur",
      "email": "pooja.singh@example.com",
      "workingTime": "9:00 AM to 5:00 PM"
    },
    {
      "id": 12,
      "employer": "Rohan Khanna",
      "gender": "Male",
      "aboveAge": 21,
      "belowAge": 31,
      "mobile": 9021669783,
      "photo": "https://i.pinimg.com/736x/b4/b9/aa/b4b9aac0fd4a6efd448db56874b15326.jpg",
      "interest": [
        "Plumber",
        "Painter"
      ],
      "experience": 7,
      "Rating": 4.3,
      "salary": 1750,
      "unit": "per day",
      "location": "Ratnagiri",
      "email": "rohan.khanna@example.com",
      "workingTime": "8:00 AM to 4:00 PM"
    },
    {
      "id": 13,
      "employer": "Arjun Verma",
      "gender": "Male",
      "aboveAge": 23,
      "belowAge": 33,
      "mobile": 9021669784,
      "photo": "https://i.pinimg.com/736x/b4/b9/aa/b4b9aac0fd4a6efd448db56874b15326.jpg",
      "interest": [
        "Electrician",
        "Carpenter"
      ],
      "experience": 5,
      "Rating": 4,
      "salary": 1600,
      "unit": "per day",
      "location": "Latur",
      "email": "arjun.verma@example.com",
      "workingTime": "9:00 AM to 5:00 PM"
    },
    {
      "id": 14,
      "employer": "Simran Kaur",
      "gender": "Female",
      "aboveAge": 19,
      "belowAge": 29,
      "mobile": 9021669785,
      "photo": "https://i.pinimg.com/736x/b4/b9/aa/b4b9aac0fd4a6efd448db56874b15326.jpg",
      "interest": [
        "Mason",
        "Painter"
      ],
      "experience": 6,
      "Rating": 4.2,
      "salary": 1650,
      "unit": "per day",
      "location": "Sangli",
      "email": "simran.kaur@example.com",
      "workingTime": "8:00 AM to 4:00 PM"
    },
    {
      "id": 15,
      "employer": "Vikram Singh",
      "gender": "Male",
      "aboveAge": 22,
      "belowAge": 32,
      "mobile": 9021669786,
      "photo": "https://i.pinimg.com/736x/b4/b9/aa/b4b9aac0fd4a6efd448db56874b15326.jpg",
      "interest": [
        "Welder",
        "Mechanic"
      ],
      "experience": 7,
      "Rating": 4.5,
      "salary": 1850,
      "unit": "per day",
      "location": "Pimpri-Chinchwad",
      "email": "vikram.singh@example.com",
      "workingTime": "9:00 AM to 5:00 PM"
    },
    {
      "id": 16,
      "employer": "Ayesha Khan",
      "gender": "Female",
      "aboveAge": 20,
      "belowAge": 30,
      "mobile": 9021669787,
      "photo": "https://i.pinimg.com/736x/b4/b9/aa/b4b9aac0fd4a6efd448db56874b15326.jpg",
      "interest": [
        "BrickLayer",
        "Electrician"
      ],
      "experience": 8,
      "Rating": 4.8,
      "salary": 1900,
      "unit": "per day",
      "location": "Navi Mumbai",
      "email": "ayesha.khan@example.com",
      "workingTime": "7:00 AM to 3:00 PM"
    },
    {
      "id": 17,
      "employer": "Kabir Kapoor",
      "gender": "Male",
      "aboveAge": 21,
      "belowAge": 31,
      "mobile": 9021669788,
      "photo": "https://i.pinimg.com/736x/b4/b9/aa/b4b9aac0fd4a6efd448db56874b15326.jpg",
      "interest": [
        "Plumber",
        "Painter"
      ],
      "experience": 5,
      "Rating": 4,
      "salary": 1600,
      "unit": "per day",
      "location": "Ahmednagar",
      "email": "kabir.kapoor@example.com",
      "workingTime": "8:00 AM to 4:00 PM"
    },
    {
      "id": 18,
      "employer": "Neha Joshi",
      "gender": "Female",
      "aboveAge": 19,
      "belowAge": 29,
      "mobile": 9021669789,
      "photo": "https://i.pinimg.com/736x/b4/b9/aa/b4b9aac0fd4a6efd448db56874b15326.jpg",
      "interest": [
        "Electrician",
        "Carpenter"
      ],
      "experience": 6,
      "Rating": 4.3,
      "salary": 1700,
      "unit": "per day",
      "location": "Kalyan",
      "email": "neha.joshi@example.com",
      "workingTime": "9:00 AM to 5:00 PM"
    },
    {
      "id": 19,
      "employer": "Rahul Mishra",
      "gender": "Male",
      "aboveAge": 22,
      "belowAge": 32,
      "mobile": 9021669790,
      "photo": "https://i.pinimg.com/736x/b4/b9/aa/b4b9aac0fd4a6efd448db56874b15326.jpg",
      "interest": [
        "Welder",
        "Mechanic"
      ],
      "experience": 7,
      "Rating": 4.5,
      "salary": 1850,
      "unit": "per day",
      "location": "Panvel",
      "email": "rahul.mishra@example.com",
      "workingTime": "9:00 AM to 5:00 PM"
    },
    {
      "id": 20,
      "employer": "Sneha Gupta",
      "gender": "Female",
      "aboveAge": 23,
      "belowAge": 33,
      "mobile": 9021669791,
      "photo": "https://i.pinimg.com/736x/b4/b9/aa/b4b9aac0fd4a6efd448db56874b15326.jpg",
      "interest": [
        "BrickLayer",
        "Electrician"
      ],
      "experience": 5,
      "Rating": 4,
      "salary": 1600,
      "unit": "per day",
      "location": "Pune",
      "email": "sneha.gupta@example.com",
      "workingTime": "8:00 AM to 4:00 PM"
    },
    {
      "id": 21,
      "employer": "Aditya Singh",
      "gender": "Male",
      "aboveAge": 21,
      "belowAge": 31,
      "mobile": 9021669792,
      "photo": "https://i.pinimg.com/736x/b4/b9/aa/b4b9aac0fd4a6efd448db56874b15326.jpg",
      "interest": [
        "Plumber",
        "Painter"
      ],
      "experience": 6,
      "Rating": 4.3,
      "salary": 1700,
      "unit": "per day",
      "location": "Mumbai",
      "email": "aditya.singh@example.com",
      "workingTime": "9:00 AM to 5:00 PM"
    },
    {
      "id": 22,
      "employer": "Maya Jain",
      "gender": "Female",
      "aboveAge": 20,
      "belowAge": 30,
      "mobile": 9021669793,
      "photo": "https://i.pinimg.com/736x/b4/b9/aa/b4b9aac0fd4a6efd448db56874b15326.jpg",
      "interest": [
        "Electrician",
        "Carpenter"
      ],
      "experience": 7,
      "Rating": 4.6,
      "salary": 1850,
      "unit": "per day",
      "location": "Nashik",
      "email": "maya.jain@example.com",
      "workingTime": "8:00 AM to 4:00 PM"
    },
    {
      "id": 23,
      "employer": "Karan Mehta",
      "gender": "Male",
      "aboveAge": 22,
      "belowAge": 32,
      "mobile": 9021669794,
      "photo": "https://i.pinimg.com/736x/b4/b9/aa/b4b9aac0fd4a6efd448db56874b15326.jpg",
      "interest": [
        "Welder",
        "Mechanic"
      ],
      "experience": 8,
      "Rating": 4.7,
      "salary": 2000,
      "unit": "per day",
      "location": "Thane",
      "email": "karan.mehta@example.com",
      "workingTime": "7:00 AM to 3:00 PM"
    },
    {
      "id": 24,
      "employer": "Avery Garcia",
      "gender": "Female",
      "aboveAge": 18,
      "belowAge": 28,
      "mobile": 9021669795,
      "photo": "https://i.pinimg.com/736x/b4/b9/aa/b4b9aac0fd4a6efd448db56874b15326.jpg",
      "interest": [
        "BrickLayer",
        "Electrician"
      ],
      "experience": 5,
      "Rating": 4.2,
      "salary": 1750,
      "unit": "per day",
      "location": "Nagpur",
      "email": "avery.garcia@example.com",
      "workingTime": "9:00 AM to 5:00 PM"
    },
    {
      "id": 25,
      "employer": "Siddharth Desai",
      "gender": "Male",
      "aboveAge": 21,
      "belowAge": 31,
      "mobile": 9021669796,
      "photo": "https://i.pinimg.com/736x/b4/b9/aa/b4b9aac0fd4a6efd448db56874b15326.jpg",
      "interest": [
        "Plumber",
        "Painter"
      ],
      "experience": 6,
      "Rating": 4,
      "salary": 1600,
      "unit": "per day",
      "location": "Kolhapur",
      "email": "siddharth.desai@example.com",
      "workingTime": "8:00 AM to 4:00 PM"
    },
    {
      "id": 26,
      "employer": "Anita Das",
      "gender": "Female",
      "aboveAge": 19,
      "belowAge": 29,
      "mobile": 9021669797,
      "photo": "https://i.pinimg.com/736x/b4/b9/aa/b4b9aac0fd4a6efd448db56874b15326.jpg",
      "interest": [
        "Electrician",
        "Carpenter"
      ],
      "experience": 7,
      "Rating": 4.5,
      "salary": 1850,
      "unit": "per day",
      "location": "Aurangabad",
      "email": "anita.das@example.com",
      "workingTime": "9:00 AM to 5:00 PM"
    },
    {
      "id": 27,
      "employer": "Ajay Bhatt",
      "gender": "Male",
      "aboveAge": 22,
      "belowAge": 32,
      "mobile": 9021669798,
      "photo": "https://i.pinimg.com/736x/b4/b9/aa/b4b9aac0fd4a6efd448db56874b15326.jpg",
      "interest": [
        "Welder",
        "Mechanic"
      ],
      "experience": 8,
      "Rating": 4.8,
      "salary": 2000,
      "unit": "per day",
      "location": "Satara",
      "email": "ajay.bhatt@example.com",
      "workingTime": "7:00 AM to 3:00 PM"
    },
    {
      "id": 28,
      "employer": "Rashmi Pandey",
      "gender": "Female",
      "aboveAge": 20,
      "belowAge": 30,
      "mobile": 9021669799,
      "photo": "https://i.pinimg.com/736x/b4/b9/aa/b4b9aac0fd4a6efd448db56874b15326.jpg",
      "interest": [
        "BrickLayer",
        "Electrician"
      ],
      "experience": 5,
      "Rating": 4,
      "salary": 1600,
      "unit": "per day",
      "location": "Latur",
      "email": "rashmi.pandey@example.com",
      "workingTime": "8:00 AM to 4:00 PM"
    },
    {
      "id": 29,
      "employer": "Yash Deshmukh",
      "gender": "Male",
      "aboveAge": 23,
      "belowAge": 33,
      "mobile": 9021669800,
      "photo": "https://i.pinimg.com/736x/b4/b9/aa/b4b9aac0fd4a6efd448db56874b15326.jpg",
      "interest": [
        "Plumber",
        "Painter"
      ],
      "experience": 6,
      "Rating": 4.3,
      "salary": 1700,
      "unit": "per day",
      "location": "Sangli",
      "email": "yash.deshmukh@example.com",
      "workingTime": "9:00 AM to 5:00 PM"
    },
    {
      "id": 30,
      "employer": "Anushka Gupta",
      "gender": "Female",
      "aboveAge": 21,
      "belowAge": 31,
      "mobile": 9021669801,
      "photo": "https://i.pinimg.com/736x/b4/b9/aa/b4b9aac0fd4a6efd448db56874b15326.jpg",
      "interest": [
        "Electrician",
        "Carpenter"
      ],
      "experience": 7,
      "Rating": 4.6,
      "salary": 1850,
      "unit": "per day",
      "location": "Pimpri-Chinchwad",
      "email": "anushka.gupta@example.com",
      "workingTime": "8:00 AM to 4:00 PM"
    },
    {
      "id": 31,
      "employer": "Chinmay Mahajan",
      "gender": "Male",
      "aboveAge": 18,
      "belowAge": 28,
      "mobile": 9021669772,
      "photo": "https://i.pinimg.com/736x/b4/b9/aa/b4b9aac0fd4a6efd448db56874b15326.jpg",
      "interest": [
        "Bricklayer",
        "Electrician"
      ],
      "experience": 8,
      "Rating": 5,
      "salary": 2000,
      "unit": "per day",
      "location": "Badlapur",
      "email": "chinmay.mahajan@example.com",
      "workingTime": "9:00 AM to 5:00 PM"
    },
    {
      "id": 32,
      "employer": "Sara Patel",
      "gender": "Female",
      "aboveAge": 25,
      "belowAge": 40,
      "mobile": 9123456789,
      "photo": "https://i.pinimg.com/736x/b4/b9/aa/b4b9aac0fd4a6efd448db56874b15326.jpg",
      "interest": [
        "Carpenter",
        "Painter"
      ],
      "experience": 12,
      "Rating": 4.5,
      "salary": 1800,
      "unit": "per day",
      "location": "Thane",
      "email": "sara.patel@example.com",
      "workingTime": "8:00 AM to 4:00 PM"
    },
    {
      "id": 33,
      "employer": "Rajesh Kumar",
      "gender": "Male",
      "aboveAge": 30,
      "belowAge": 45,
      "mobile": 9234567890,
      "photo": "https://i.pinimg.com/736x/b4/b9/aa/b4b9aac0fd4a6efd448db56874b15326.jpg",
      "interest": [
        "Plumber",
        "Mason"
      ],
      "experience": 15,
      "Rating": 4.8,
      "salary": 2200,
      "unit": "per day",
      "location": "Mumbai",
      "email": "rajesh.kumar@example.com",
      "workingTime": "9:00 AM to 5:00 PM"
    },
    {
      "id": 34,
      "employer": "Priya Devi",
      "gender": "Female",
      "aboveAge": 20,
      "belowAge": 35,
      "mobile": 9345678901,
      "photo": "https://i.pinimg.com/736x/b4/b9/aa/b4b9aac0fd4a6efd448db56874b15326.jpg",
      "interest": [
        "Gardener",
        "Landscaper"
      ],
      "experience": 6,
      "Rating": 4.2,
      "salary": 1500,
      "unit": "per day",
      "location": "Pune",
      "email": "priya.devi@example.com",
      "workingTime": "7:00 AM to 3:00 PM"
    },
    {
      "id": 35,
      "employer": "Anil Singh",
      "gender": "Male",
      "aboveAge": 22,
      "belowAge": 32,
      "mobile": 9456789012,
      "photo": "https://i.pinimg.com/736x/b4/b9/aa/b4b9aac0fd4a6efd448db56874b15326.jpg",
      "interest": [
        "Welder",
        "Blacksmith"
      ],
      "experience": 10,
      "Rating": 4.6,
      "salary": 1900,
      "unit": "per day",
      "location": "Nashik",
      "email": "anil.singh@example.com",
      "workingTime": "8:00 AM to 4:00 PM"
    },
    {
      "id": 36,
      "employer": "Deepa Sharma",
      "gender": "Female",
      "aboveAge": 28,
      "belowAge": 38,
      "mobile": 9567890123,
      "photo": "https://i.pinimg.com/736x/b4/b9/aa/b4b9aac0fd4a6efd448db56874b15326.jpg",
      "interest": [
        "Housekeeper",
        "Janitor"
      ],
      "experience": 7,
      "Rating": 4.0,
      "salary": 1600,
      "unit": "per day",
      "location": "Thane",
      "email": "deepa.sharma@example.com",
      "workingTime": "9:00 AM to 5:00 PM"
    },
    {
      "id": 37,
      "employer": "Sanjay Patel",
      "gender": "Male",
      "aboveAge": 26,
      "belowAge": 36,
      "mobile": 9678901234,
      "photo": "https://i.pinimg.com/736x/b4/b9/aa/b4b9aac0fd4a6efd448db56874b15326.jpg",
      "interest": [
        "Farmer",
        "Rancher"
      ],
      "experience": 11,
      "Rating": 4.4,
      "salary": 1700,
      "unit": "per day",
      "location": "Satara",
      "email": "sanjay.patel@example.com",
      "workingTime": "7:00 AM to 3:00 PM"
    },
    {
      "id": 38,
      "employer": "Asha Devi",
      "gender": "Female",
      "aboveAge": 24,
      "belowAge": 34,
      "mobile": 9789012345,
      "photo": "https://i.pinimg.com/736x/b4/b9/aa/b4b9aac0fd4a6efd448db56874b15326.jpg",
      "interest": [
        "Fisherman",
        "Shrimp Fisher"
      ],
      "experience": 9,
      "Rating": 4.3,
      "salary": 1750,
      "unit": "per day",
      "location": "Ratnagiri",
      "email": "asha.devi@example.com",
      "workingTime": "6:00 AM to 2:00 PM"
    },
    {
      "id": 39,
      "employer": "Vikram Singh",
      "gender": "Male",
      "aboveAge": 30,
      "belowAge": 45,
      "mobile": 9890123456,
      "photo": "https://i.pinimg.com/736x/b4/b9/aa/b4b9aac0fd4a6efd448db56874b15326.jpg",
      "interest": [
        "Cattle Rancher",
        "Livestock Farmer"
      ],
      "experience": 16,
      "Rating": 4.9,
      "salary": 2300,
      "unit": "per day",
      "location": "Solapur",
      "email": "vikram.singh@example.com",
      "workingTime": "8:00 AM to 4:00 PM"
    },
    {
      "id": 40,
      "employer": "Meena Kumari",
      "gender": "Female",
      "aboveAge": 22,
      "belowAge": 32,
      "mobile": 9123456789,
      "photo": "https://i.pinimg.com/736x/b4/b9/aa/b4b9aac0fd4a6efd448db56874b15326.jpg",
      "interest": [
        "Fruit Picker",
        "Harvester"
      ],
      "experience": 5,
      "Rating": 3.8,
      "salary": 1400,
      "unit": "per day",
      "location": "Nashik",
      "email": "meena.kumari@example.com",
      "workingTime": "7:00 AM to 3:00 PM"
    },
    {
      "id": 41,
      "employer": "Ramesh Sharma",
      "gender": "Male",
      "aboveAge": 28,
      "belowAge": 38,
      "mobile": 9234567890,
      "photo": "https://i.pinimg.com/736x/b4/b9/aa/b4b9aac0fd4a6efd448db56874b15326.jpg",
      "interest": [
        "Brickmaker",
        "Tile Setter"
      ],
      "experience": 10,
      "Rating": 4.6,
      "salary": 1950,
      "unit": "per day",
      "location": "Pune",
      "email": "ramesh.sharma@example.com",
      "workingTime": "9:00 AM to 5:00 PM"
    },
    {
      "id": 42,
      "employer": "Kavita Singh",
      "gender": "Female",
      "aboveAge": 25,
      "belowAge": 35,
      "mobile": 9345678901,
      "photo": "https://i.pinimg.com/736x/b4/b9/aa/b4b9aac0fd4a6efd448db56874b15326.jpg",
      "interest": [
        "Scaffolder",
        "Demolition Worker"
      ],
      "experience": 8,
      "Rating": 4.1,
      "salary": 1650,
      "unit": "per day",
      "location": "Mumbai",
      "email": "kavita.singh@example.com",
      "workingTime": "8:00 AM to 4:00 PM"
    },
    {
      "id": 43,
      "employer": "Amit Patel",
      "gender": "Male",
      "aboveAge": 22,
      "belowAge": 32,
      "mobile": 9456789012,
      "photo": "https://i.pinimg.com/736x/b4/b9/aa/b4b9aac0fd4a6efd448db56874b15326.jpg",
      "interest": [
        "Assembler",
        "Fabricator"
      ],
      "experience": 6,
      "Rating": 3.9,
      "salary": 1450,
      "unit": "per day",
      "location": "Thane",
      "email": "amit.patel@example.com",
      "workingTime": "7:00 AM to 3:00 PM"
    },
    {
      "id": 44,
      "employer": "Rani Devi",
      "gender": "Female",
      "aboveAge": 20,
      "belowAge": 30,
      "mobile": 9567890123,
      "photo": "https://i.pinimg.com/736x/b4/b9/aa/b4b9aac0fd4a6efd448db56874b15326.jpg",
      "interest": [
        "Car Washer",
        "Detailer"
      ],
      "experience": 4,
      "Rating": 3.5,
      "salary": 1300,
      "unit": "per day",
      "location": "Mumbai",
      "email": "rani.devi@example.com",
      "workingTime": "9:00 AM to 5:00 PM"
    },
    {
      "id": 45,
      "employer": "Vinod Kumar",
      "gender": "Male",
      "aboveAge": 27,
      "belowAge": 37,
      "mobile": 9678901234,
      "photo": "https://i.pinimg.com/736x/b4/b9/aa/b4b9aac0fd4a6efd448db56874b15326.jpg",
      "interest": [
        "Packer",
        "Sorter"
      ],
      "experience": 9,
      "Rating": 4.0,
      "salary": 1600,
      "unit": "per day",
      "location": "Pune",
      "email": "vinod.kumar@example.com",
      "workingTime": "8:00 AM to 4:00 PM"
    },
    {
      "id": 46,
      "employer": "Anita Sharma",
      "gender": "Female",
      "aboveAge": 23,
      "belowAge": 33,
      "mobile": 9789012345,
      "photo": "https://i.pinimg.com/736x/b4/b9/aa/b4b9aac0fd4a6efd448db56874b15326.jpg",
      "interest": [
        "Barber",
        "Hairstylist"
      ],
      "experience": 7,
      "Rating": 4.2,
      "salary": 1700,
      "unit": "per day",
      "location": "Nagpur",
      "email": "anita.sharma@example.com",
      "workingTime": "10:00 AM to 6:00 PM"
    },
    {
      "id": 47,
      "employer": "Sunil Patel",
      "gender": "Male",
      "aboveAge": 29,
      "belowAge": 39,
      "mobile": 9890123456,
      "photo": "https://i.pinimg.com/736x/b4/b9/aa/b4b9aac0fd4a6efd448db56874b15326.jpg",
      "interest": [
        "Plasterer",
        "Drywaller"
      ],
      "experience": 11,
      "Rating": 4.5,
      "salary": 1850,
      "unit": "per day",
      "location": "Thane",
      "email": "sunil.patel@example.com",
      "workingTime": "9:00 AM to 5:00 PM"
    },
    {
      "id": 48,
      "employer": "Sunita Devi",
      "gender": "Female",
      "aboveAge": 26,
      "belowAge": 36,
      "mobile": 9123456789,
      "photo": "https://i.pinimg.com/736x/b4/b9/aa/b4b9aac0fd4a6efd448db56874b15326.jpg",
      "interest": [
        "Cement Mason",
        "Concrete Finisher"
      ],
      "experience": 10,
      "Rating": 4.4,
      "salary": 1750,
      "unit": "per day",
      "location": "Mumbai",
      "email": "sunita.devi@example.com",
      "workingTime": "8:00 AM to 4:00 PM"
    },
    {
      "id": 49,
      "employer": "Harish Kumar",
      "gender": "Male",
      "aboveAge": 25,
      "belowAge": 35,
      "mobile": 9234567890,
      "photo": "https://i.pinimg.com/736x/b4/b9/aa/b4b9aac0fd4a6efd448db56874b15326.jpg",
      "interest": [
        "Painter",
        "Decorator"
      ],
      "experience": 9,
      "Rating": 4.3,
      "salary": 1700,
      "unit": "per day",
      "location": "Pune",
      "email": "harish.kumar@example.com",
      "workingTime": "9:00 AM to 5:00 PM"
    },
    {
      "id": 50,
      "employer": "Geeta Sharma",
      "gender": "Female",
      "aboveAge": 21,
      "belowAge": 31,
      "mobile": 9345678901,
      "photo": "https://i.pinimg.com/736x/b4/b9/aa/b4b9aac0fd4a6efd448db56874b15326.jpg",
      "interest": [
        "Plumber",
        "Pipefitter"
      ],
      "experience": 5,
      "Rating": 3.7,
      "salary": 1350,
      "unit": "per day",
      "location": "Nashik",
      "email": "geeta.sharma@example.com",
      "workingTime": "7:00 AM to 3:00 PM"
    },
    {
      "id": 51,
      "employer": "Alok Singh",
      "gender": "Male",
      "aboveAge": 24,
      "belowAge": 34,
      "mobile": 9456789012,
      "photo": "https://i.pinimg.com/736x/b4/b9/aa/b4b9aac0fd4a6efd448db56874b15326.jpg",
      "interest": [
        "Electrician",
        "Lineworker"
      ],
      "experience": 7,
      "Rating": 4.1,
      "salary": 1650,
      "unit": "per day",
      "location": "Thane",
      "email": "alok.singh@example.com",
      "workingTime": "8:00 AM to 4:00 PM"
    },
    {
      "id": 52,
      "employer": "Priyanka Patel",
      "gender": "Female",
      "aboveAge": 22,
      "belowAge": 32,
      "mobile": 9567890123,
      "photo": "https://i.pinimg.com/736x/b4/b9/aa/b4b9aac0fd4a6efd448db56874b15326.jpg",
      "interest": [
        "HVAC Technician",
        "AC Mechanic"
      ],
      "experience": 6,
      "Rating": 3.8,
      "salary": 1550,
      "unit": "per day",
      "location": "Mumbai",
      "email": "priyanka.patel@example.com",
      "workingTime": "9:00 AM to 5:00 PM"
    },
    {
      "id": 53,
      "employer": "Nitin Kumar",
      "gender": "Male",
      "aboveAge": 27,
      "belowAge": 37,
      "mobile": 9678901234,
      "photo": "https://i.pinimg.com/736x/b4/b9/aa/b4b9aac0fd4a6efd448db56874b15326.jpg",
      "interest": [
        "Mechanic",
        "Technician"
      ],
      "experience": 8,
      "Rating": 4.2,
      "salary": 1700,
      "unit": "per day",
      "location": "Pune",
      "email": "nitin.kumar@example.com",
      "workingTime": "8:00 AM to 4:00 PM"
    },
    {
      "id": 54,
      "employer": "Sarita Devi",
      "gender": "Female",
      "aboveAge": 23,
      "belowAge": 33,
      "mobile": 9789012345,
      "photo": "https://i.pinimg.com/736x/b4/b9/aa/b4b9aac0fd4a6efd448db56874b15326.jpg",
      "interest": [
        "Roofer",
        "Tiler"
      ],
      "experience": 6,
      "Rating": 3.9,
      "salary": 1600,
      "unit": "per day",
      "location": "Thane",
      "email": "sarita.devi@example.com",
      "workingTime": "7:00 AM to 3:00 PM"
    },
    {
      "id": 55,
      "employer": "Rajesh Verma",
      "gender": "Male",
      "aboveAge": 28,
      "belowAge": 38,
      "mobile": 9890123456,
      "photo": "https://i.pinimg.com/736x/b4/b9/aa/b4b9aac0fd4a6efd448db56874b15326.jpg",
      "interest": [
        "Welder",
        "Blacksmith"
      ],
      "experience": 9,
      "Rating": 4.0,
      "salary": 1650,
      "unit": "per day",
      "location": "Nashik",
      "email": "rajesh.verma@example.com",
      "workingTime": "9:00 AM to 5:00 PM"
    },
    {
      "id": 56,
      "employer": "Manju Sharma",
      "gender": "Female",
      "aboveAge": 24,
      "belowAge": 34,
      "mobile": 9123456789,
      "photo": "https://i.pinimg.com/736x/b4/b9/aa/b4b9aac0fd4a6efd448db56874b15326.jpg",
      "interest": [
        "Housekeeper",
        "Janitor"
      ],
      "experience": 7,
      "Rating": 4.1,
      "salary": 1700,
      "unit": "per day",
      "location": "Mumbai",
      "email": "manju.sharma@example.com",
      "workingTime": "8:00 AM to 4:00 PM"
    },
    {
      "id": 57,
      "employer": "Prakash Patel",
      "gender": "Male",
      "aboveAge": 26,
      "belowAge": 36,
      "mobile": 9234567890,
      "photo": "https://i.pinimg.com/736x/b4/b9/aa/b4b9aac0fd4a6efd448db56874b15326.jpg",
      "interest": [
        "Farmer",
        "Rancher"
      ],
      "experience": 8,
      "Rating": 4.2,
      "salary": 1750,
      "unit": "per day",
      "location": "Pune",
      "email": "prakash.patel@example.com",
      "workingTime": "9:00 AM to 5:00 PM"
    },
    {
      "id": 58,
      "employer": "Sita Devi",
      "gender": "Female",
      "aboveAge": 25,
      "belowAge": 35,
      "mobile": 9345678901,
      "photo": "https://i.pinimg.com/736x/b4/b9/aa/b4b9aac0fd4a6efd448db56874b15326.jpg",
      "interest": [
        "Gardener",
        "Landscaper"
      ],
      "experience": 9,
      "Rating": 4.3,
      "salary": 1800,
      "unit": "per day",
      "location": "Nagpur",
      "email": "sita.devi@example.com",
      "workingTime": "7:00 AM to 3:00 PM"
    },
    {
      "id": 59,
      "employer": "Sita Devi",
      "gender": "Female",
      "aboveAge": 25,
      "belowAge": 35,
      "mobile": 9345678901,
      "photo": "https://i.pinimg.com/736x/b4/b9/aa/b4b9aac0fd4a6efd448db56874b15326.jpg",
      "interest": [
        "Gardener",
        "Landscaper"
      ],
      "experience": 9,
      "Rating": 4.3,
      "salary": 1800,
      "unit": "per day",
      "location": "Nagpur",
      "email": "sita.devi@example.com",
      "workingTime": "7:00 AM to 3:00 PM"
    },
    {
      "id": 60,
      "employer": "Sita Devi",
      "gender": "Female",
      "aboveAge": 25,
      "belowAge": 35,
      "mobile": 9345678901,
      "photo": "https://i.pinimg.com/736x/b4/b9/aa/b4b9aac0fd4a6efd448db56874b15326.jpg",
      "interest": [
        "Gardener",
        "Landscaper"
      ],
      "experience": 9,
      "Rating": 4.3,
      "salary": 1800,
      "unit": "per day",
      "location": "Nagpur",
      "email": "sita.devi@example.com",
      "workingTime": "7:00 AM to 3:00 PM"
    },
    {
      "id": 61,
      "employer": "Sita Devi",
      "gender": "Female",
      "aboveAge": 25,
      "belowAge": 35,
      "mobile": 9345678901,
      "photo": "https://i.pinimg.com/736x/b4/b9/aa/b4b9aac0fd4a6efd448db56874b15326.jpg",
      "interest": [
        "Gardener",
        "Landscaper"
      ],
      "experience": 9,
      "Rating": 4.3,
      "salary": 1800,
      "unit": "per day",
      "location": "Nagpur",
      "email": "sita.devi@example.com",
      "workingTime": "7:00 AM to 3:00 PM"
    },
    {
      "id": 62,
      "employer": "Sita Devi",
      "gender": "Female",
      "aboveAge": 25,
      "belowAge": 35,
      "mobile": 9345678901,
      "photo": "https://i.pinimg.com/736x/b4/b9/aa/b4b9aac0fd4a6efd448db56874b15326.jpg",
      "interest": [
        "Gardener",
        "Landscaper"
      ],
      "experience": 9,
      "Rating": 4.3,
      "salary": 1800,
      "unit": "per day",
      "location": "Nagpur",
      "email": "sita.devi@example.com",
      "workingTime": "7:00 AM to 3:00 PM"
    },
    {
      "id": 63,
      "employer": "Sita Devi",
      "gender": "Female",
      "aboveAge": 25,
      "belowAge": 35,
      "mobile": 9345678901,
      "photo": "https://i.pinimg.com/736x/b4/b9/aa/b4b9aac0fd4a6efd448db56874b15326.jpg",
      "interest": [
        "Gardener",
        "Landscaper"
      ],
      "experience": 9,
      "Rating": 4.3,
      "salary": 1800,
      "unit": "per day",
      "location": "Nagpur",
      "email": "sita.devi@example.com",
      "workingTime": "7:00 AM to 3:00 PM"
    },
    {
      "id": 64,
      "employer": "Sita Devi",
      "gender": "Female",
      "aboveAge": 25,
      "belowAge": 35,
      "mobile": 9345678901,
      "photo": "https://i.pinimg.com/736x/b4/b9/aa/b4b9aac0fd4a6efd448db56874b15326.jpg",
      "interest": [
        "Gardener",
        "Landscaper"
      ],
      "experience": 9,
      "Rating": 4.3,
      "salary": 1800,
      "unit": "per day",
      "location": "Nagpur",
      "email": "sita.devi@example.com",
      "workingTime": "7:00 AM to 3:00 PM"
    },
    {
      "id": 65,
      "employer": "Rakesh Kumar",
      "gender": "Male",
      "aboveAge": 27,
      "belowAge": 37,
      "mobile": 9678901234,
      "photo": "https://i.pinimg.com/736x/b4/b9/aa/b4b9aac0fd4a6efd448db56874b15326.jpg",
      "interest": [
        "Packer",
        "Sorter"
      ],
      "experience": 7,
      "Rating": 4.0,
      "salary": 1650,
      "unit": "per day",
      "location": "Nashik",
      "email": "rakesh.kumar@example.com",
      "workingTime": "8:00 AM to 4:00 PM"
    },
    {
      "id": 66,
      "employer": "Meera Sharma",
      "gender": "Female",
      "aboveAge": 23,
      "belowAge": 33,
      "mobile": 9789012345,
      "photo": "https://i.pinimg.com/736x/b4/b9/aa/b4b9aac0fd4a6efd448db56874b15326.jpg",
      "interest": [
        "Barber",
        "Hairstylist"
      ],
      "experience": 5,
      "Rating": 3.8,
      "salary": 1550,
      "unit": "per day",
      "location": "Thane",
      "email": "meera.sharma@example.com",
      "workingTime": "9:00 AM to 5:00 PM"
    },
    {
      "id": 67,
      "employer": "Sanjay Patel",
      "gender": "Male",
      "aboveAge": 29,
      "belowAge": 39,
      "mobile": 9890123456,
      "photo": "https://i.pinimg.com/736x/b4/b9/aa/b4b9aac0fd4a6efd448db56874b15326.jpg",
      "interest": [
        "Plasterer",
        "Drywaller"
      ],
      "experience": 8,
      "Rating": 4.2,
      "salary": 1700,
      "unit": "per day",
      "location": "Mumbai",
      "email": "sanjay.patel@example.com",
      "workingTime": "8:00 AM to 4:00 PM"
    },
    {
      "id": 68,
      "employer": "Sarika Devi",
      "gender": "Female",
      "aboveAge": 25,
      "belowAge": 35,
      "mobile": 9123456789,
      "photo": "https://i.pinimg.com/736x/b4/b9/aa/b4b9aac0fd4a6efd448db56874b15326.jpg",
      "interest": [
        "Cement Mason",
        "Concrete Finisher"
      ],
      "experience": 9,
      "Rating": 4.3,
      "salary": 1750,
      "unit": "per day",
      "location": "Nagpur",
      "email": "sarika.devi@example.com",
      "workingTime": "7:00 AM to 3:00 PM"
    },
    {
      "id": 69,
      "employer": "Amar Kumar",
      "gender": "Male",
      "aboveAge": 28,
      "belowAge": 38,
      "mobile": 9234567890,
      "photo": "https://i.pinimg.com/736x/b4/b9/aa/b4b9aac0fd4a6efd448db56874b15326.jpg",
      "interest": [
        "Painter",
        "Decorator"
      ],
      "experience": 8,
      "Rating": 4.1,
      "salary": 1700,
      "unit": "per day",
      "location": "Pune",
      "email": "amar.kumar@example.com",
      "workingTime": "8:00 AM to 4:00 PM"
    },
    {
      "id": 70,
      "employer": "Anita Singh",
      "gender": "Female",
      "aboveAge": 24,
      "belowAge": 34,
      "mobile": 9345678901,
      "photo": "https://i.pinimg.com/736x/b4/b9/aa/b4b9aac0fd4a6efd448db56874b15326.jpg",
      "interest": [
        "Plumber",
        "Pipefitter"
      ],
      "experience": 6,
      "Rating": 3.9,
      "salary": 1600,
      "unit": "per day",
      "location": "Mumbai",
      "email": "anita.singh@example.com",
      "workingTime": "7:00 AM to 3:00 PM"
    },
    {
      "id": 71,
      "employer": "Alok Sharma",
      "gender": "Male",
      "aboveAge": 27,
      "belowAge": 37,
      "mobile": 9567890123,
      "photo": "https://i.pinimg.com/736x/b4/b9/aa/b4b9aac0fd4a6efd448db56874b15326.jpg",
      "interest": [
        "Electrician",
        "Lineworker"
      ],
      "experience": 7,
      "Rating": 4.0,
      "salary": 1650,
      "unit": "per day",
      "location": "Thane",
      "email": "alok.sharma@example.com",
      "workingTime": "8:00 AM to 4:00 PM"
    },
    {
      "id": 72,
      "employer": "Pooja Patel",
      "gender": "Female",
      "aboveAge": 23,
      "belowAge": 33,
      "mobile": 9678901234,
      "photo": "https://i.pinimg.com/736x/b4/b9/aa/b4b9aac0fd4a6efd448db56874b15326.jpg",
      "interest": [
        "HVAC Technician",
        "AC Mechanic"
      ],
      "experience": 5,
      "Rating": 3.8,
      "salary": 1550,
      "unit": "per day",
      "location": "Nashik",
      "email": "pooja.patel@example.com",
      "workingTime": "9:00 AM to 5:00 PM"
    },
    {
      "id": 73,
      "employer": "Nitin Sharma",
      "gender": "Male",
      "aboveAge": 29,
      "belowAge": 39,
      "mobile": 9890123456,
      "photo": "https://i.pinimg.com/736x/b4/b9/aa/b4b9aac0fd4a6efd448db56874b15326.jpg",
      "interest": [
        "Mechanic",
        "Technician"
      ],
      "experience": 8,
      "Rating": 4.2,
      "salary": 1700,
      "unit": "per day",
      "location": "Mumbai",
      "email": "nitin.sharma@example.com",
      "workingTime": "8:00 AM to 4:00 PM"
    },
    {
      "id": 74,
      "employer": "Sarita Devi",
      "gender": "Female",
      "aboveAge": 25,
      "belowAge": 35,
      "mobile": 9123456789,
      "photo": "https://i.pinimg.com/736x/b4/b9/aa/b4b9aac0fd4a6efd448db56874b15326.jpg",
      "interest": [
        "Roofer",
        "Tiler"
      ],
      "experience": 9,
      "Rating": 4.3,
      "salary": 1750,
      "unit": "per day",
      "location": "Thane",
      "email": "sarita.devi@example.com",
      "workingTime": "7:00 AM to 3:00 PM"
    },
    {
      "id": 75,
      "employer": "Rajesh Kumar",
      "gender": "Male",
      "aboveAge": 28,
      "belowAge": 38,
      "mobile": 9234567890,
      "photo": "https://i.pinimg.com/736x/b4/b9/aa/b4b9aac0fd4a6efd448db56874b15326.jpg",
      "interest": [
        "Welder",
        "Blacksmith"
      ],
      "experience": 8,
      "Rating": 4.1,
      "salary": 1700,
      "unit": "per day",
      "location": "Pune",
      "email": "rajesh.kumar@example.com",
      "workingTime": "8:00 AM to 4:00 PM"
    },
    {
      "id": 76,
      "employer": "Manju Devi",
      "gender": "Female",
      "aboveAge": 24,
      "belowAge": 34,
      "mobile": 9345678901,
      "photo": "https://i.pinimg.com/736x/b4/b9/aa/b4b9aac0fd4a6efd448db56874b15326.jpg",
      "interest": [
        "Housekeeper",
        "Janitor"
      ],
      "experience": 6,
      "Rating": 3.9,
      "salary": 1600,
      "unit": "per day",
      "location": "Nashik",
      "email": "manju.devi@example.com",
      "workingTime": "9:00 AM to 5:00 PM"
    },
    {
      "id": 77,
      "employer": "Prakash Singh",
      "gender": "Male",
      "aboveAge": 26,
      "belowAge": 36,
      "mobile": 9567890123,
      "photo": "https://i.pinimg.com/736x/b4/b9/aa/b4b9aac0fd4a6efd448db56874b15326.jpg",
      "interest": [
        "Farmer",
        "Rancher"
      ],
      "experience": 7,
      "Rating": 4.0,
      "salary": 1650,
      "unit": "per day",
      "location": "Mumbai",
      "email": "prakash.singh@example.com",
      "workingTime": "8:00 AM to 4:00 PM"
    },
    {
      "id": 78,
      "employer": "Sita Devi",
      "gender": "Female",
      "aboveAge": 23,
      "belowAge": 33,
      "mobile": 9678901234,
      "photo": "https://i.pinimg.com/736x/b4/b9/aa/b4b9aac0fd4a6efd448db56874b15326.jpg",
      "interest": [
        "Gardener",
        "Landscaper"
      ],
      "experience": 5,
      "Rating": 3.8,
      "salary": 1550,
      "unit": "per day",
      "location": "Thane",
      "email": "sita.devi@example.com",
      "workingTime": "9:00 AM to 5:00 PM"
    },
    {
      "id": 79,
      "employer": "Gopal Kumar",
      "gender": "Male",
      "aboveAge": 29,
      "belowAge": 39,
      "mobile": 9890123456,
      "photo": "https://i.pinimg.com/736x/b4/b9/aa/b4b9aac0fd4a6efd448db56874b15326.jpg",
      "interest": [
        "Cattle Rancher",
        "Livestock Farmer"
      ],
      "experience": 8,
      "Rating": 4.2,
      "salary": 1700,
      "unit": "per day",
      "location": "Nagpur",
      "email": "gopal.kumar@example.com",
      "workingTime": "8:00 AM to 4:00 PM"
    },
    {
      "id": 80,
      "employer": "Anjali Devi",
      "gender": "Female",
      "aboveAge": 24,
      "belowAge": 34,
      "mobile": 9234567890,
      "photo": "https://i.pinimg.com/736x/b4/b9/aa/b4b9aac0fd4a6efd448db56874b15326.jpg",
      "interest": [
        "Fruit Picker",
        "Harvester"
      ],
      "experience": 6,
      "Rating": 3.9,
      "salary": 1600,
      "unit": "per day",
      "location": "Pune",
      "email": "anjali.devi@example.com",
      "workingTime": "7:00 AM to 3:00 PM"
    }
  ]

const interests = [...new Set(people.flatMap(person =>person.location))]

console.log(interests)

const categories = interests.map(interest=>(
    {
        value: interest.replace(/\s+/g,'-'),
        label:interest
    }
))

console.log(categories)