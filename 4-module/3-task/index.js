function highlight(table) {
    const rows = table.querySelectorAll('tbody tr');
    
    rows.forEach(tr => {
        // 1. Статус (data-available)
        const statusTd = tr.cells[3]; // 4-я ячейка (Status)
        
        if (statusTd.hasAttribute('data-available')) {
            const available = statusTd.getAttribute('data-available') === 'true';
            tr.classList.add(available ? 'available' : 'unavailable');
        } else {
            tr.hidden = true;
        }
        
        // 2. Gender
        const genderTd = tr.cells[2]; // 3-я ячейка (Gender)
        const gender = genderTd.textContent.trim();
        
        if (gender === 'm') {
            tr.classList.add('male');
        } else if (gender === 'f') {
            tr.classList.add('female');
        }
        
        // 3. Age
        const ageTd = tr.cells[1]; // 2-я ячейка (Age)
        const age = parseInt(ageTd.textContent.trim(), 10);
        
        if (age < 18) {
            tr.style.textDecoration = 'line-through';
        }
    });
}