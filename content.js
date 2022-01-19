// Weighted chart values
gpa_cp={103:4.3,102:4.3,101:4.3,100:4.3,99:4.3,98:4.3,97:4.3,96:4,95:4,94:4,93:4,92:3.7,91:3.7,90:3.7,89:3.4,88:3.4,87:3.4,86:3.1,85:3.1,84:3.1,83:3.1,82:2.9,81:2.9,80:2.9,79:2.7,78:2.7,77:2.7,76:2.4,75:2.4,74:2.4,73:2.4,72:2,71:2,70:2,69:1.7,68:1.7,67:1.7,66:1.7,65:1.7,64:1.3,63:1.3,62:1.3,61:1.3,60:1.3},
gpa_h={103:4.7,102:4.7,101:4.7,100:4.7,99:4.7,98:4.7,97:4.7,96:4.3,95:4.3,94:4.3,93:4.3,92:4,91:4,90:4,89:3.7,88:3.7,87:3.7,86:3.4,85:3.4,84:3.4,83:3.4,82:3.1,81:3.1,80:3.1,79:2.9,78:2.9,77:2.9,76:2.7,75:2.7,74:2.7,73:2.7,72:2.3,71:2.3,70:2.3,69:2,68:2,67:2,66:2,65:2,64:1.7,63:1.7,62:1.7,61:1.7,60:1.7}
,gpa_ap={103:5,102:5,101:5,100:5,99:5,98:5,97:5,96:4.7,95:4.7,94:4.7,93:4.7,92:4.3,91:4.3,90:4.3,89:4,88:4,87:4,86:3.7,85:3.7,84:3.7,83:3.7,82:3.5,81:3.5,80:3.5,79:3.2,78:3.2,77:3.2,76:2.9,75:2.9,74:2.9,73:2.9,72:2.6,71:2.6,70:2.6,69:2.3,68:2.3,67:2.3,66:2.3,65:2.3,64:2.0,63:2.0,62:2.0,61:2.0,60:2.0};

// old scale
gpa4_cp2={102:4, 101:4,100:4,99:3.9,98:3.85,97:3.8,96:3.75,95:3.7,94:3.65,93:3.6,92:3.5,91:3.4,90:3.35,89:3.3,88:3.25,87:3.15,86:3.1,85:3,84:2.9,83:2.8,82:2.7,81:2.6,80:2.5,79:2.4,78:2.3,77:2.2,76:2.1,75:2,74:1.9,73:1.8,72:1.7,71:1.6,70:1.5,69:1.4,68:1.3,67:1.2,66:1.1,65:1,64:.9,63:.8,62:.7,61:.6,60:.5},gpa4_cp={102:4, 101:4.2, 100:4.2,99:4.1,98:4.05,97:4,96:3.95,95:3.9,94:3.85,93:3.8,92:3.7,91:3.6,90:3.55,89:3.5,88:3.45,87:3.35,86:3.3,85:3.2,84:3.1,83:3,82:2.9,81:2.8,80:2.7,79:2.6,78:2.5,77:2.4,76:2.3,75:2.2,74:2.1,73:2,72:1.9,71:1.8,70:1.7,69:1.6,68:1.5,67:1.4,66:1.3,65:1.2,64:1.1,63:1,62:.9,61:.8,60:.7},gpa4_h={102:4.5, 101:4.5, 100:4.5,99:4.4,98:4.35,97:4.3,96:4.25,95:4.2,94:4.15,93:4.1,92:4,91:3.9,90:3.85,89:3.8,88:3.75,87:3.65,86:3.6,85:3.5,84:3.4,83:3.3,82:3.2,81:3.1,80:3,79:2.9,78:2.8,77:2.7,76:2.6,75:2.5,74:2.4,73:2.3,72:2.2,71:2.1,70:2,69:1.9,68:1.8,67:1.7,66:1.6,65:1.5,64:1.4,63:1.3,62:1.2,61:1.1,60:1},gpa4_ap={102:4.7, 101:4.7,100:4.7,99:4.6,98:4.55,97:4.5,96:4.45,95:4.4,94:4.35,93:4.3,92:4.2,91:4.1,90:4.05,89:4,88:3.95,87:3.85,86:3.8,85:3.7,84:3.6,83:3.5,82:3.4,81:3.3,80:3.2,79:3.1,78:3,77:2.9,76:2.8,75:2.7,74:2.6,73:2.5,72:2.4,71:2.3,70:2.2,69:2.1,68:2,67:1.9,66:1.8,65:1.7,64:1.6,63:1.5,62:1.4,61:1.3,60:1.2};
// Parsing data

function filter_level(class_name) {
    if (class_name.includes('PLUS')) {
        return 'PLUS'
    }
    if (class_name.toLowerCase().includes('ap ')) {
        return 'AP'
    } 
    else if (class_name.toLowerCase().includes(' h')) {
        return 'H'
    }
    else if (class_name.toLowerCase().slice(-2) == ' cp') {
        return 'CP'
    }
    else if (class_name.toLowerCase().slice(-2) == ' cp2') {
        return 'CP2'
    } else {
        return 'CP2'
    }
}

// Gather grades and class levels

function get_grades(list_cells) {
    var classes = [];

    for (var c = 0; c <= list_cells.length; c++) {
        list_cols = list_cells[c];
        if (list_cols == undefined) {
            break;
        }

        list_rows = list_cols.querySelectorAll('td');

        classes.push({
            level: filter_level(list_rows[1].innerText.trim()),
            grade: parseFloat(list_rows[7].innerText.trim().replace(/\D\./g, '')),
            duration: (list_rows[4].innerText.trim())
        });
    }

    return classes;
}





// Calculate GPA
var data_grid = document.querySelector("#dataGrid");
var list_cells = data_grid.querySelectorAll('.listCell');

var classes = get_grades(list_cells);


var sum = 0;
var grades_length = 0;
var avg_length = 0;
var total_gpas = [];
var total_gpas1 = [];
// Calc grades length based on s1 or FY


// Get GPA per class based on level
for (c = 0; c <= classes.length; c++) {
    var subtractor = 1;
    if (classes[c] != undefined) {
        if (!isNaN(classes[c].grade)) {
            sum += classes[c].grade;
            avg_length += 1;
            if(classes[c].duration == 'FY'){
                grades_length += 1;
            } else if(classes[c].duration == 'S1' || classes[c].duration == 'S2') {
                grades_length += 0.5;
                subtractor = 2;
            }
            switch(classes[c].level) 
            {
                case 'CP2':
                    total_gpas.push(gpa_cp[Math.round(classes[c].grade)]/subtractor)
                    total_gpas1.push(gpa4_cp2[Math.round(classes[c].grade)]/subtractor)
                    classes[c].gpa = gpa_cp[Math.round(classes[c].grade)]
                    break;
                case 'CP':
                    total_gpas.push(gpa_cp[Math.round(classes[c].grade)]/subtractor)
                    total_gpas1.push(gpa4_cp[Math.round(classes[c].grade)]/subtractor)
                    classes[c].gpa = gpa_cp[Math.round(classes[c].grade)]
                    break;
                case 'H':
                    total_gpas.push(gpa_h[Math.round(classes[c].grade)]/subtractor)
                    total_gpas1.push(gpa4_h[Math.round(classes[c].grade)]/subtractor)
                    classes[c].gpa = gpa_h[Math.round(classes[c].grade)]
                    break;
                case 'AP':
                    total_gpas.push(gpa_ap[Math.round(classes[c].grade)]/subtractor)
                    total_gpas1.push(gpa4_ap[Math.round(classes[c].grade)]/subtractor)
                    classes[c].gpa = gpa_ap[Math.round(classes[c].grade)]
                    break;
                default:
                    break;
            }
        }
    }
}


// Calculate average grade & average GPA 

function add(a, b) {return a + b;}

avg_grade = Math.round(sum/avg_length * 100) / 100;
avg_gpa = Math.round(total_gpas.reduce(add, 0) / grades_length * 100) / 100;
avg_gpa1 = Math.round(total_gpas1.reduce(add, 0) / grades_length * 100) / 100;
// predictions



// Display average grade & average GPA

document.querySelector("#bodytop").innerHTML = `
<style>
@import url('https://fonts.googleapis.com/css2?family=Balsamiq+Sans:wght@700&family=Crimson+Text&family=Hind+Madurai:wght@600&family=Rajdhani:wght@500&family=Teko:wght@500&display=swap');
</style>
    <div class="font">
 
    <div class="tooltip">
        Term GPA 5.0 Scale: `+avg_gpa+`
        <span class="tooltiptext">Weighted Calculation `+total_gpas.reduce(add, 0)+` / `+grades_length+`  </span>
    </div>
    <br>

    Average Grade: `+avg_grade+`
    <br/>
    Credits in Term: `+grades_length * 10+`
    </div>
    <script>
        function calc() {
            `+grades_length+` += 10;
        }
    </script>
    
`;



// Display GPAs side by side with grade

for (var c = 0; c <= list_cells.length; c++) {
    if (list_cells[c]) 
        cols = list_cells[c].querySelectorAll('td');

    if (classes[c] && classes[c].gpa) {
        if (classes[c].gpa < 3.0)
            cols[7].innerHTML= cols[7].innerText + '<span style="color: red; float: right">'+classes[c].gpa+'</span>';
        else if(classes[c].gpa >= 3.0 && classes[c].gpa <= 3.9)
            cols[7].innerHTML= cols[7].innerText + '<span style="color: black; float: right">'+classes[c].gpa+'</span>';
        else
            cols[7].innerHTML= cols[7].innerText + '<span style="color: green; float: right">'+classes[c].gpa+'</span>';
    }
}
