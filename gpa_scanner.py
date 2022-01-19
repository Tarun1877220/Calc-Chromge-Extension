"""

    Program that parses data from GPA chart when copy and pasted
    into a blank text file.

"""


h3 = []
h2 = []
h = []
ap = []

with open('gpas.txt', 'r') as f:
    for line in f.readlines():
        tier = line.split(' ')
        
        h3.append(tier[1].replace('\n', ''))
        h2.append(tier[2].replace('\n', ''))
        h.append(tier[3].replace('\n', ''))
        ap.append(tier[4].replace('\n', ''))

    f.close()

gpa_h3 = "gpa_h3 = {\n"
gpa_h2 = "gpa_h2 = {\n"
gpa_h = "gpa_h = {\n"
gpa_ap = "gpa_ap = {\n"

c = 100
for gpa in h3:
    gpa_h3 += f'{c}: {gpa},\n'
    c -= 1
gpa_h3 += "},\n"

c = 100
for gpa in h2:
    gpa_h2 += f'{c}: {gpa},\n'
    c -= 1
gpa_h2 += "},\n"

c = 100
for gpa in h:
    gpa_h += f'{c}: {gpa},\n'
    c -= 1
gpa_h += "},\n"

c = 100
for gpa in ap:
    gpa_ap += f'{c}: {gpa},\n'
    c -= 1
gpa_ap += "}\n"

print(gpa_h3, gpa_h2, gpa_h, gpa_ap)

