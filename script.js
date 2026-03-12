// State Management
let courses = JSON.parse(localStorage.getItem("courses")) || [];
let userMajor = localStorage.getItem("userMajor") || null;
let performanceChart;
let strategyChart;

// Curriculum Data
const isCurriculum = {
    year1: [
        { code: "IS 1101", name: "Programming and Problem Solving", credits: 3 },
        { code: "IS 1102", name: "Computer Systems", credits: 2 },
        { code: "IS 1103", name: "Information Systems Management", credits: 2 },
        { code: "IS 1104", name: "Application Laboratory", credits: 2 },
        { code: "IS 1105", name: "Introduction to Management", credits: 2 },
        { code: "IS 1106", name: "Discrete Mathematics", credits: 2 },
        { code: "IS 1107", name: "Interactive Media Design", credits: 2 },
        { code: "EN 1101", name: "Enhancement I (Business Communication)", credits: 2 },
        { code: "IS 1108", name: "Financial Accounting", credits: 2 },
        { code: "IS 1109", name: "Programming for Web Application Development", credits: 3 },
        { code: "IS 1110", name: "Database Management", credits: 2 },
        { code: "IS 1111", name: "Software Engineering", credits: 2 },
        { code: "IS 1112", name: "Probability and Statistics", credits: 2 },
        { code: "IS 1113", name: "Organization Behavior and Society", credits: 2 },
        { code: "IS 1114", name: "Data Structures and Algorithms I", credits: 2 },
        { code: "IS 1115", name: "Fundamentals of Economics", credits: 2 },
        { code: "EN 1102", name: "Enhancement II", credits: 2 }
    ],
    year2: [
        { code: "IS 2101", name: "System Analysis and Design", credits: 3 },
        { code: "IS 2102", name: "Group Project I", credits: 3 },
        { code: "IS 2103", name: "Digital Marketing", credits: 2 },
        { code: "IS 2104", name: "Rapid Application Development", credits: 2 },
        { code: "IS 2105", name: "Business Statistics", credits: 2 },
        { code: "IS 2106", name: "Business Process Management", credits: 2 },
        { code: "IS 2107", name: "Graphics and Visualization", credits: 2 },
        { code: "IS 2108", name: "IT Project Management", credits: 2 },
        { code: "IS 2109", name: "Information Systems Security", credits: 2 },
        { code: "IS 2110", name: "Data Structures and Algorithms II", credits: 2 },
        { code: "IS 2111", name: "Computer Networks", credits: 2 },
        { code: "IS 2112", name: "E-Business Strategy", credits: 2 },
        { code: "IS 2113", name: "Community Informatics (ICT for Development)", credits: 2 },
        { code: "IS 2114", name: "Business Process Reengineering", credits: 2 },
        { code: "EN 2102", name: "Enhancement III", credits: 2 }
    ],
    year3: [
        { code: "IS 3101", name: "Enterprise Resource Planning Systems", credits: 2 },
        { code: "IS 3102", name: "Human-Computer Interaction", credits: 2 },
        { code: "IS 3103", name: "Software Quality Assurance", credits: 2 },
        { code: "IS 3104", name: "Strategic Management", credits: 2 },
        { code: "IS 3105", name: "Professional Practice", credits: 2 },
        { code: "IS 3106", name: "IT Procurement Management", credits: 2 },
        { code: "IS 3107", name: "Contingency Planning and Risk Management", credits: 2 },
        { code: "IS 3108", name: "Middleware Architecture", credits: 2 },
        { code: "IS 3109", name: "System & Network Administration", credits: 2 },
        { code: "IS 3110", name: "Research Methods", credits: 2 },
        { code: "IS 3111", name: "Operations Research", credits: 2 },
        { code: "IS 3112", name: "Game Development", credits: 2 },
        { code: "IS 3113", name: "Group Project II", credits: 5 },
        { code: "IS 3114", name: "Enterprise Application", credits: 2 },
        { code: "IS 3115", name: "Mobile Application Development", credits: 2 },
        { code: "IS 3116", name: "Database Management Systems", credits: 2 },
        { code: "IS 3117", name: "Machine Learning & Neural Computing", credits: 2 },
        { code: "IS 3118", name: "E-Learning and Instructional Design", credits: 2 },
        { code: "EN 3101", name: "Industrial Placement", credits: 6 }
    ],
    year4: [
        { code: "IS 4101", name: "Final Year Project in Information Systems", credits: 8 },
        { code: "IS 4102", name: "Advanced Software Quality Assurance", credits: 2 },
        { code: "IS 4103", name: "Data Analytics", credits: 2 },
        { code: "IS 4104", name: "Research Seminar", credits: 1 },
        { code: "IS 4105", name: "Advanced Concepts in Software Design", credits: 2 },
        { code: "IS 4106", name: "Advanced Database Management", credits: 2 },
        { code: "IS 4107", name: "Ethical Issues and Legal Aspects in IT", credits: 2 },
        { code: "IS 4108", name: "Natural Language Processing", credits: 2 },
        { code: "IS 4109", name: "Cognitive Robotics", credits: 2 },
        { code: "IS 4110", name: "Parallel Computing", credits: 2 },
        { code: "IS 4111", name: "Computational Biology", credits: 2 },
        { code: "IS 4112", name: "Geographic Information Systems", credits: 2 },
        { code: "IS 4113", name: "Digital Forensics", credits: 2 },
        { code: "IS 4114", name: "IS Innovation", credits: 2 },
        { code: "IS 4115", name: "Enterprise Architecture", credits: 2 },
        { code: "IS 4116", name: "Business Intelligence Systems", credits: 2 },
        { code: "IS 4117", name: "Intelligent Systems", credits: 2 },
        { code: "IS 4118", name: "Embedded Systems", credits: 2 },
        { code: "IS 4119", name: "Philosophy of Science", credits: 2 }
    ]
};

const csCurriculum = {
    year1: [
        { code: "SCS 1201", name: "Data Structures & Algorithms I", credits: 2 },
        { code: "SCS 1202", name: "Programming Using C", credits: 3 },
        { code: "SCS 1203", name: "Database I", credits: 2 },
        { code: "SCS 1204", name: "Discrete Mathematics I", credits: 2 },
        { code: "SCS 1205", name: "Computer Systems", credits: 2 },
        { code: "SCS 1206", name: "Laboratory I", credits: 2 },
        { code: "SCS 1207", name: "Software Engineering I", credits: 2 },
        { code: "ENH 1201", name: "Enhancement I (Communication Skills)", credits: 2 },
        { code: "SCS 1208", name: "Data Structures & Algorithms II", credits: 2 },
        { code: "SCS 1209", name: "Object Oriented Programming", credits: 3 },
        { code: "SCS 1210", name: "Software Engineering II", credits: 2 },
        { code: "SCS 1211", name: "Mathematical Methods I", credits: 2 },
        { code: "SCS 1212", name: "Foundation of Computer Science", credits: 2 },
        { code: "SCS 1213", name: "Probability and Statistics", credits: 2 },
        { code: "SCS 1214", name: "Operating Systems I", credits: 2 },
        { code: "ENH 1202", name: "Enhancement II", credits: 2 }
    ],
    year2: [
        { code: "SCS 2201", name: "Data Structures and Algorithms III", credits: 2 },
        { code: "SCS 2202", name: "Group Project I", credits: 3 },
        { code: "SCS 2203", name: "Software Engineering III", credits: 2 },
        { code: "SCS 2204", name: "Functional Programming", credits: 2 },
        { code: "SCS 2205", name: "Computer Networks I", credits: 2 },
        { code: "SCS 2206", name: "Mathematical Methods II", credits: 2 },
        { code: "SCS 2207", name: "Programming Language Concepts", credits: 2 },
        { code: "SCS 2208", name: "Rapid Application Development", credits: 2 },
        { code: "SCS 2209", name: "Database II", credits: 2 },
        { code: "SCS 2210", name: "Discrete Mathematics II", credits: 2 },
        { code: "SCS 2211", name: "Laboratory II", credits: 2 },
        { code: "SCS 2212", name: "Automata Theory", credits: 2 },
        { code: "SCS 2213", name: "Electronics and Physical Computing", credits: 3 },
        { code: "SCS 2214", name: "Information System Security", credits: 2 },
        { code: "ENH 2201", name: "Enhancement III (Entrepreneurship)", credits: 2 }
    ],
    year3: [
        { code: "SCS 3201", name: "Machine Learning and Neural Computing", credits: 2 },
        { code: "SCS 3202", name: "Advanced Computer Architecture", credits: 2 },
        { code: "SCS 3203", name: "Middleware Architecture", credits: 2 },
        { code: "SCS 3204", name: "Management", credits: 2 },
        { code: "SCS 3205", name: "Computer Graphics I", credits: 2 },
        { code: "SCS 3206", name: "Graph Theory", credits: 2 },
        { code: "SCS 3207", name: "Software Quality Assurance", credits: 2 },
        { code: "SCS 3208", name: "Software Project Management", credits: 2 },
        { code: "SCS 3209", name: "Human-Computer Interaction", credits: 2 },
        { code: "SCS 3210", name: "Systems and Network Administration", credits: 2 },
        { code: "SCS 3211", name: "Compiler Theory", credits: 2 },
        { code: "SCS 3212", name: "Mobile Application Development", credits: 2 },
        { code: "SCS 3213", name: "Game Development", credits: 2 },
        { code: "SCS 3214", name: "Group Project II", credits: 5 },
        { code: "SCS 3215", name: "Professional Practice", credits: 2 },
        { code: "SCS 3216", name: "Research Methods", credits: 2 },
        { code: "ENH 3201", name: "Industry Placement / Project", credits: 6 }
    ],
    year4: [
        { code: "SCS 4223/4", name: "Final Year Project (SE or CS)", credits: 8 },
        { code: "SCS 4201", name: "Ethical Issues and Legal Aspects in IT", credits: 2 },
        { code: "SCS 4202", name: "Cognitive Robotics", credits: 2 },
        { code: "SCS 4203", name: "Database III", credits: 2 },
        { code: "SCS 4204", name: "Data Analytics", credits: 2 },
        { code: "SCS 4205", name: "Computer Networks II", credits: 2 },
        { code: "SCS 4206", name: "Computer Graphics II", credits: 2 },
        { code: "SCS 4207", name: "Image Processing & CV", credits: 2 },
        { code: "SCS 4208", name: "Theory of Computation", credits: 2 },
        { code: "SCS 4209", name: "Natural Language Processing", credits: 2 },
        { code: "SCS 4210", name: "Parallel Computing", credits: 2 },
        { code: "SCS 4211", name: "Research Seminar", credits: 1 },
        { code: "SCS 4212", name: "Formal Methods", credits: 2 },
        { code: "SCS 4213", name: "Digital Forensics", credits: 2 },
        { code: "SCS 4214", name: "Natural Algorithms", credits: 2 },
        { code: "SCS 4215", name: "Computational Biology", credits: 2 },
        { code: "SCS 4216", name: "Advanced Topics in Mathematics", credits: 2 },
        { code: "SCS 4217", name: "Embedded Systems", credits: 2 },
        { code: "SCS 4218", name: "Operating Systems II", credits: 2 },
        { code: "SCS 4219", name: "Distributed Systems", credits: 2 },
        { code: "SCS 4220", name: "Data Structures and Algorithms IV", credits: 2 },
        { code: "SCS 4221", name: "Software Engineering IV", credits: 2 },
        { code: "SCS 4222", name: "Logic Programming", credits: 2 },
        { code: "SCS 4225", name: "Philosophy of Science", credits: 2 },
        { code: "SCS 4226", name: "Intelligent Systems", credits: 2 }
    ]
};

// Constants
const TOTAL_DEGREE_CREDITS = 120;

// DOM Elements
const elements = {
    majorModal: document.getElementById("majorModal"),
    courseForm: document.getElementById("courseForm"),
    courseSelect: document.getElementById("courseSelect"),
    gradePills: document.getElementById("gradePills"),
    gradeInput: document.getElementById("grade"),
    courseTable: document.getElementById("courseTable"),
    courseTableEl: document.getElementById("courseTableEl"),
    emptyState: document.getElementById("emptyState"),
    gpaDisplay: document.getElementById("gpa"),
    creditsDisplay: document.getElementById("totalCredits"),
    progressBar: document.getElementById("progressBar"),
    progressPercent: document.getElementById("progressPercent"),
    performanceChart: document.getElementById("performanceChart"),
    recommendationBox: document.getElementById("recommendationBox"),
    recommendationText: document.getElementById("recommendationText"),
    navLinks: document.querySelectorAll(".nav-link"),
    performanceSection: document.getElementById("performance"),
    predictorSection: document.getElementById("predictor"),
    maxGpaInfo: document.getElementById("maxGpaInfo"),
    maxPossibleGpaDisplay: document.getElementById("maxPossibleGpa"),
    targetGpaInput: document.getElementById("targetGpa"),
    calculateBtn: document.getElementById("calculateStrategy"),
    strategyResults: document.getElementById("strategyResults"),
    requiredGradeDisplay: document.getElementById("requiredGrade"),
    subjectBreakdown: document.getElementById("subjectBreakdown"),
    mainGrid: document.querySelector(".grid-layout"),
    historySection: document.getElementById("history"),
    addCourseSection: document.getElementById("add-course"),
    dashboardSection: document.getElementById("dashboard"),
    changeMajorBtn: document.getElementById("changeMajor"),
    layoutWrapper: document.querySelector(".layout-wrapper"),
    mobileToggle: document.getElementById("floatingToggle"),
    sideNav: document.getElementById("sideNav")
};

// Mobile Toggle Logic
if (elements.mobileToggle) {
    elements.mobileToggle.addEventListener("click", () => {
        elements.sideNav.classList.toggle("active");
    });
}

// Close sidebar on link click (mobile)
elements.navLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (window.innerWidth <= 868) {
            elements.sideNav.classList.remove("active");
        }
    });
});

// Major Selection Logic
function showMajorModal() {
    elements.majorModal.style.animation = "fadeIn 0.3s ease-out";
    elements.majorModal.style.display = "flex";
    elements.layoutWrapper.style.display = "none";
}

if (!userMajor) {
    showMajorModal();
} else {
    elements.majorModal.style.display = "none";
    elements.layoutWrapper.style.display = "flex";
}

if (elements.changeMajorBtn) {
    elements.changeMajorBtn.addEventListener("click", (e) => {
        e.preventDefault();
        showMajorModal();
    });
}

document.querySelectorAll(".major-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        userMajor = btn.getAttribute("data-major");
        localStorage.setItem("userMajor", userMajor);
        elements.majorModal.style.animation = "fadeOut 0.3s ease-out";
        setTimeout(() => {
            elements.majorModal.style.display = "none";
            elements.layoutWrapper.style.display = "flex";
            initCourseOptions();
        }, 300);
    });
});

// Grade Pill Selection Logic
elements.gradePills.querySelectorAll(".grade-pill").forEach(pill => {
    pill.addEventListener("click", () => {
        elements.gradePills.querySelectorAll(".grade-pill").forEach(p => p.classList.remove("selected"));
        pill.classList.add("selected");
        elements.gradeInput.value = pill.getAttribute("data-value");
    });
});

// Initialize Course Options
function initCourseOptions() {
    if (!userMajor) return;
    
    const curr = userMajor === "IS" ? isCurriculum : csCurriculum;
    
    // Clear existing options
    ["year1", "year2", "year3", "year4"].forEach(y => {
        const container = document.getElementById(`${y}-options`);
        if (container) container.innerHTML = "";
    });

    Object.keys(curr).forEach(yearKey => {
        const container = document.getElementById(`${yearKey}-options`);
        if (container) {
            curr[yearKey].forEach(course => {
                const option = document.createElement("option");
                option.value = JSON.stringify(course);
                option.textContent = `${course.code} - ${course.name} (${course.credits} Credits)`;
                container.appendChild(option);
            });
        }
    });
}

// Navigation Handling
function showView(viewId) {
    elements.mainGrid.classList.add("hidden-view");
    elements.historySection.classList.add("hidden-view");
    elements.performanceSection.classList.remove("show");
    elements.predictorSection.classList.remove("show");
    elements.addCourseSection.classList.remove("hidden-view");
    elements.dashboardSection.classList.remove("hidden-view");

    if (viewId === "performance") {
        elements.performanceSection.classList.add("show");
        performanceChart = renderPerformanceChart(elements.performanceChart, performanceChart);
    } else if (viewId === "predictor") {
        elements.predictorSection.classList.add("show");
        calculateMaxPossibleGpa();
    } else if (viewId === "dashboard") {
        elements.mainGrid.classList.remove("hidden-view");
        elements.historySection.classList.remove("hidden-view");
    } else if (viewId === "add-course") {
        elements.mainGrid.classList.remove("hidden-view");
        elements.dashboardSection.classList.add("hidden-view");
    } else if (viewId === "history") {
        elements.historySection.classList.remove("hidden-view");
    }

    elements.navLinks.forEach(link => {
        const href = link.getAttribute("href").substring(1);
        link.classList.toggle("active", href === viewId);
    });
}

function calculateMaxPossibleGpa() {
    let currentPoints = 0, currentCredits = 0;
    courses.forEach(c => { currentPoints += c.grade * c.credits; currentCredits += c.credits; });
    const remainingCredits = Math.max(TOTAL_DEGREE_CREDITS - currentCredits, 0);
    const maxPoints = currentPoints + (remainingCredits * 4.0);
    const maxGpa = maxPoints / TOTAL_DEGREE_CREDITS;
    elements.maxGpaInfo.style.display = "flex";
    elements.maxPossibleGpaDisplay.textContent = maxGpa.toFixed(2);
    elements.targetGpaInput.placeholder = `Max is ${maxGpa.toFixed(2)}`;
}

elements.navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        const id = link.getAttribute("href").substring(1);
        e.preventDefault();
        showView(id);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

elements.courseForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!elements.gradeInput.value) { alert("Please select a grade!"); return; }
    const selectedCourseData = JSON.parse(elements.courseSelect.value);
    const grade = parseFloat(elements.gradeInput.value);
    courses.push({ code: selectedCourseData.code, name: selectedCourseData.name, credits: selectedCourseData.credits, grade, id: Date.now() });
    updateApp();
    elements.courseForm.reset();
    elements.gradePills.querySelectorAll(".grade-pill").forEach(p => p.classList.remove("selected"));
    elements.gradeInput.value = "";
});

elements.calculateBtn.addEventListener("click", () => {
    const targetGpa = parseFloat(elements.targetGpaInput.value);
    if (!targetGpa || targetGpa > 4.0 || targetGpa < 0) { alert("Please enter a valid target GPA (0.0 - 4.0)"); return; }
    let currentPoints = 0, currentCredits = 0;
    courses.forEach(c => { currentPoints += c.grade * c.credits; currentCredits += c.credits; });
    const remainingCredits = Math.max(TOTAL_DEGREE_CREDITS - currentCredits, 0);
    if (remainingCredits === 0) { alert("Reached degree credits!"); return; }
    const requiredAvg = (targetGpa * TOTAL_DEGREE_CREDITS - currentPoints) / remainingCredits;
    if (requiredAvg > 4.0) { elements.requiredGradeDisplay.textContent = "Impossible"; elements.requiredGradeDisplay.style.color = "var(--danger)"; }
    else if (requiredAvg <= 0) { elements.requiredGradeDisplay.textContent = "Reached"; elements.requiredGradeDisplay.style.color = "var(--success)"; }
    else { elements.requiredGradeDisplay.textContent = requiredAvg.toFixed(2); elements.requiredGradeDisplay.style.color = "var(--primary)"; }
    renderStrategyResults(requiredAvg, targetGpa, currentCredits > 0 ? (currentPoints / currentCredits) : 0);
});

function renderStrategyResults(requiredAvg, targetGpa, currentGpa) {
    elements.strategyResults.style.display = "block";
    const possibleGrades = [{ l: "A", v: 4.0 }, { l: "A-", v: 3.7 }, { l: "B+", v: 3.3 }, { l: "B", v: 3.0 }, { l: "B-", v: 2.7 }, { l: "C+", v: 2.3 }, { l: "C", v: 2.0 }, { l: "D", v: 1.0 }];
    let suggestedGrade = possibleGrades.find(g => g.v >= requiredAvg) || { l: "A+", v: 4.0 };
    if (requiredAvg > 4.0) suggestedGrade = { l: "N/A", v: 0 };
    elements.subjectBreakdown.innerHTML = `<div class="breakdown-item"><span class="breakdown-label">Target Milestone</span><span class="breakdown-grade" style="background:#dbeafe; color:#1e40af">${targetGpa.toFixed(2)}</span></div><div class="breakdown-item"><span class="breakdown-label">Min Grade Needed</span><span class="breakdown-grade">${suggestedGrade.l}</span></div>`;
    const ctx = document.getElementById('strategyChart').getContext('2d');
    if (strategyChart) strategyChart.destroy();
    strategyChart = new Chart(ctx, { type: 'line', data: { labels: ['Current', 'Target'], datasets: [{ label: 'Path', data: [currentGpa.toFixed(2), targetGpa.toFixed(2)], borderColor: '#4f46e5', backgroundColor: 'rgba(79, 70, 229, 0.1)', fill: true, tension: 0.4 }] }, options: { responsive: true, maintainAspectRatio: false, scales: { y: { min: 0, max: 4.0 } } } });
}

function renderPerformanceChart(canvasEl, chartInstance) {
    if (!canvasEl) return null;
    const ctx = canvasEl.getContext('2d');
    const labels = courses.map(c => c.code);
    const data = courses.map(c => c.grade);
    const colors = data.map(grade => grade >= 3.5 ? '#10b981' : (grade >= 2.5 ? '#f59e0b' : '#ef4444'));
    if (chartInstance) { chartInstance.data.labels = labels; chartInstance.data.datasets[0].data = data; chartInstance.data.datasets[0].backgroundColor = colors; chartInstance.update(); return chartInstance; }
    return new Chart(ctx, { type: 'bar', data: { labels, datasets: [{ label: 'Grade Point', data, backgroundColor: colors, borderRadius: 6 }] }, options: { responsive: true, maintainAspectRatio: false, scales: { y: { beginAtZero: true, max: 4.0 } }, plugins: { legend: { display: false } } } });
}

function updateApp() { saveData(); renderTable(); calculateStats(); if (elements.performanceSection.classList.contains("show")) { performanceChart = renderPerformanceChart(elements.performanceChart, performanceChart); } if (elements.predictorSection.classList.contains("show")) { calculateMaxPossibleGpa(); } updateRecommendations(); }

function renderTable() {
    elements.courseTable.innerHTML = "";
    if (courses.length === 0) { elements.courseTableEl.style.display = "none"; elements.emptyState.style.display = "flex"; return; }
    elements.courseTableEl.style.display = "table"; elements.emptyState.style.display = "none";
    courses.forEach((course) => {
        const row = document.createElement("tr");
        row.innerHTML = `<td style="font-weight: 600;">${course.code}</td><td>${course.name}</td><td>${course.credits}</td><td>${getGradeLabel(course.grade)}</td><td><button class="btn btn-danger" onclick="deleteCourse(${course.id})"><i data-lucide="trash-2" style="width:14px;height:14px"></i> Delete</button></td>`;
        elements.courseTable.appendChild(row);
    });
    if (window.lucide) lucide.createIcons();
}

function calculateStats() {
    let totalPoints = 0, totalCredits = 0;
    courses.forEach(course => { totalPoints += course.grade * course.credits; totalCredits += course.credits; });
    const gpa = totalCredits > 0 ? (totalPoints / totalCredits) : 0;
    elements.gpaDisplay.textContent = gpa.toFixed(2); elements.creditsDisplay.textContent = totalCredits;
    elements.gpaDisplay.className = 'stat-value ' + (gpa >= 3.5 ? 'gpa-high' : (gpa >= 2.5 ? 'gpa-mid' : (gpa > 0 ? 'gpa-low' : '')));
    updateProgress(totalCredits);
}

function updateRecommendations() {
    if (courses.length === 0) { elements.recommendationBox.style.display = "none"; return; }
    elements.recommendationBox.style.display = "block";
    const minGrade = Math.min(...courses.map(c => c.grade));
    const names = courses.filter(c => c.grade === minGrade).map(c => `<span class="highlight">${c.code}</span>`).join(" and ");
    elements.recommendationText.innerHTML = minGrade === 4.0 ? "Perfect work!" : `Focus on ${names} to boost GPA.`;
}

function updateProgress(credits) {
    const percent = Math.min((credits / TOTAL_DEGREE_CREDITS) * 100, 100);
    elements.progressBar.style.width = `${percent}%`; elements.progressPercent.textContent = `${Math.round(percent)}%`;
}

function getGradeLabel(value) {
    const grades = { "4": "A", "4.0": "A", "3.7": "A-", "3.3": "B+", "3": "B", "3.0": "B", "2.7": "B-", "2.3": "C+", "2": "C", "2.0": "C", "1": "D", "1.0": "D", "0": "F", "0.0": "F" };
    return grades[value] || value;
}

window.deleteCourse = function(id) { courses = courses.filter(c => c.id !== id); updateApp(); };
function saveData() { localStorage.setItem("courses", JSON.stringify(courses)); }

initCourseOptions();
updateApp();
