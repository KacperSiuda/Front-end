using GoogleCalendarApiTest_v1.GoogleAPI;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace GoogleCalendarApiTest_v1
{
    public partial class Form1 : Form
    {
        private GoogleApiConector calendarConect = new GoogleApiConector();
        public Form1()
        {
            InitializeComponent();
            conectToCalendar();
        }
        public void conectToCalendar()
        {
            try
            {
                calendarConect.CreateCredential();

            }
            catch (Exception e)
            {

                MessageBox.Show(e.ToString());
            }
        }

        private void button1_Click(object sender, EventArgs e)
        {
            calendarConect.CreateEvent(textBox1.Text, dateTimePicker1.Value, dateTimePicker2.Value);
        }
    }
}
