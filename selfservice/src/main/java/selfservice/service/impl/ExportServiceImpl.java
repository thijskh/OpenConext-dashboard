package selfservice.service.impl;

import au.com.bytecode.opencsv.CSVWriter;
import selfservice.command.LmngServiceBinding;
import selfservice.domain.csa.CompoundServiceProvider;
import selfservice.domain.csa.FieldImage;
import selfservice.domain.csa.FieldString;
import selfservice.domain.csa.Screenshot;
import selfservice.service.ExportService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.io.StringWriter;
import java.util.List;

@Service(value = "exportService")
public class ExportServiceImpl implements ExportService {

  private static final String[] HEADER = new String[]{"SP Entity", "CRM GUID", "IDP Only Visible", "Field", "CRM value", "SurfConext value", "Distribution Channel Value", "Active Source"};

  private static final Logger LOG = LoggerFactory.getLogger(ExportServiceImpl.class);

  @Override
  public String exportServiceBindingsCsv(List<LmngServiceBinding> bindings, String baseUrl) {
    StringWriter result = new StringWriter();

    try (CSVWriter csvWriter = new CSVWriter(result)) {
      writeHeader(csvWriter);

      for (LmngServiceBinding binding : bindings) {
        writeStringFields(csvWriter, binding);
        writeImageFields(csvWriter, binding, baseUrl);
      }

      return result.toString();
    } catch (IOException e) {
      LOG.error("Failed writing csv file, return empty content", e);
      return "";
    }
  }

  private void writeHeader(CSVWriter csvWriter) {
    csvWriter.writeNext(HEADER);
  }

  private void writeStringFields(final CSVWriter csvWriter, final LmngServiceBinding binding) {
    CompoundServiceProvider csp = binding.getCompoundServiceProvider();
    for (FieldString field : csp.getFields()) {
      String name = null == binding.getServiceProvider() ? binding.getCompoundServiceProvider().getServiceProviderEntityId() : binding.getServiceProvider().getName();
      String idpOnly = null == binding.getServiceProvider() ? "" : Boolean.toString(binding.getServiceProvider().isIdpVisibleOnly());

      csvWriter.writeNext(new String[] {
          name,
          binding.getLmngIdentifier(),
          idpOnly,
          field.getKey().name(),
          csp.getLmngFieldValues().get(field.getKey()),
          csp.getSurfConextFieldValues().get(field.getKey()),
          csp.getDistributionFieldValues().get(field.getKey()),
          field.getSource().name()
      });
    }
  }

  private void writeImageFields(final CSVWriter csvWriter, final LmngServiceBinding binding, final String baseUrl) {
    CompoundServiceProvider csp = binding.getCompoundServiceProvider();
      for (FieldImage field : csp.getFieldImages()) {
        String name = null == binding.getServiceProvider() ? binding.getCompoundServiceProvider().getServiceProviderEntityId() : binding.getServiceProvider().getName();
        String idpOnly = null == binding.getServiceProvider() ? "" : Boolean.toString(binding.getServiceProvider().isIdpVisibleOnly());

        csvWriter.writeNext(new String[] {
            name,
            binding.getLmngIdentifier(),
            idpOnly,
            field.getKey().name(),
            csp.getLmngFieldValues().get(field.getKey()),
            csp.getSurfConextFieldValues().get(field.getKey()),
            baseUrl + "/fieldimages/" + field.getId() + ".img",
            field.getSource().name()
        });
      }

      for (Screenshot current : csp.getScreenShotsImages()) {
        String name =
            null == binding.getServiceProvider()
            ? binding.getCompoundServiceProvider().getServiceProviderEntityId()
                : binding.getServiceProvider().getName();

        csvWriter.writeNext(new String[] {
            name,
            binding.getLmngIdentifier(),
            Boolean.toString(binding.getServiceProvider().isIdpVisibleOnly()),
            "_SCREENSHOT_",
            "",
            "",
            baseUrl + current.getFileUrl(),
            ""
        });
      }
  }
}
